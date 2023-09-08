let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/interval');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/take');
require('rxjs/add/operator/map');

let outer = Observable.interval(1000).take(2);

let combined = outer.flatMap(x => {
    return Observable
        .interval(400)
        .take(3)
        .map(y => `outer ${x}: inner ${y}`);
});

combined.subscribe( result => console.log(`result ${result}`));