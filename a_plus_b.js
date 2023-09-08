let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/interval');
require('rxjs/add/operator/from');
require('rxjs/add/operator/combineLatest');
require('rxjs/add/operator/zip');

const a1$ = Observable.from([1, 2, 3, 4, 5]);

const b1$ = Observable.from([4,20]);

a1.combineLatest(b1$, (a, b) => a + b)
    .subscribe(val => console.log(val));