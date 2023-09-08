let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/mergeMap');

function getDrinks(){

    let beers = Observable.from([
        { name: 'Stella', country: 'Belgium', price: 9.50 },
        { name: 'Sam Adams', country: 'USA', price: 8.50 },
        { name: 'Bud Light', country: 'USA', price: 6.50 }
    ]);

    let softDrinks = Observable.from([
        { name: 'Coca Cola', country: 'USA', price: 1.50 },
        { name: 'Fanta', country: 'USA', price: 1.50 },
        { name: 'Lemonade', country: 'France', price: 2.50 }
    ]);

    return Observable.create(observer => {
        observer.next(beers);
        observer.next(softDrinks);
        observer.complete();
    });
}

getDrinks()
.flatMap(drinks => drinks)
.subscribe(
    drink => console.log("Subscriber got " + drink.name + ": " + drink.price),
    err => console.error(err),
    () => console.log('The stream of observable is over')
);