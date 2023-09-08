let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/map');

function getData(){

    var beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
    ];

    return Observable.create(observer => {
        let counter = 0;
        beers.forEach(beer => {
            observer.next(beer);
            counter++;
            if( counter > Math.random() * 5 ){
                observer.error(
                    {
                        status: 500,
                        description: 'Beer stream error'
                    }
                );
            }else{
                emulateDelayInSeconds(1);
            }
        });
        observer.complete();
    });
}

getData()
    .catch(err => {
        console.log("Got" + err.status + " : " + err.description);
        if(err.status === 500) {
            console.error(">>> Switching to backup data source");
            return getCatchedData();
        }
    });

function getCatchedData(){

    var beers = [
        {name: "Leffe Blonde", country: "Belgium", price: 9.50},
        {name: "Miller Lite", country: "USA", price: 8.50},
        {name: "Corona", country: "Mexico", price: 6.50},
        {name: "Asahi", country: "Japan", price: 7.50}
    ];

    return Observable.create(observer => {
        beers.forEach(beer => {
            observer.next(beer);
            emulateDelayInSeconds(1);
        });
        observer.complete();
    });
}

function getDataFromAnotherService(){
    var beers = [
        {name: "Leffe Blonde", country: "Belgium", price: 9.50},
        {name: "Miller Lite", country: "USA", price: 8.50},
        {name: "Corona", country: "Mexico", price: 6.50},
        {name: "Asahi", country: "Japan", price: 7.50}
    ];

    

}

function emulateDelayInSeconds(seconds){
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
}