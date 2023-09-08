let {Subject} = require('rxjs/Subject');

const mySubject = new Subject();

const subscriber1 = mySubject
    .subscribe(
        x => console.log(`Subscriber 1: ${x}`)
    );

const subscriber2 = mySubject
    .subscribe(
        x => console.log(`Subscriber 2: ${x}`)
    );

mySubject.next(123);

subscriber2.unsubscribe();

mySubject.next(456);