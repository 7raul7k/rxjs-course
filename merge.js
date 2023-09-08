let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/timer');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/mapTo');


let threeSecHTTPRequest = Observable.timer(3000).mapTo('first response');

let oneSecHTTPRequest = Observable.timer(1000).mapTo('second response');

Observable
    .merge(threeSecHTTPRequest, oneSecHTTPRequest)
    .subscribe(res => console.log(res));