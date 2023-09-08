let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/share');
require('rxjs/add/operator/take');

let numbers = Observable
.interval(1000)
.take(5)
.share();

function subscribeToNumbers(name) {
    numbers
        .subscribe(
        x => console.log(`Subscriber ${name}: ${x}`)
    );
}

subscribeToNumbers('Subscriber 1');

let addSubscription = () => subscribeToNumbers('Subscriber 2');

setTimeout(addSubscription, 2500);