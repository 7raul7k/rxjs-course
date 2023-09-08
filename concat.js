let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/timer');
require('rxjs/add/operator/concat');
require('rxjs/add/operator/mapTo');

let threeSecHTTPRequest = Observable.timer(3000).mapTo('first response');

let oneSecHTTPRequest = Observable.timer(1000).mapTo('second response');

Observable
    .concat(threeSecHTTPRequest, oneSecHTTPRequest)
    .subscribe(res => console.log(res));
