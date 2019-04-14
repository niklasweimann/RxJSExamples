import { Observable, Subject } from 'rxjs';

var observable = Observable.create(function (source) {
    source.next(Math.random());
});

var subject = new Subject();

subject.subscribe(v => console.log('consumer A: ' + v));
subject.subscribe(v => console.log('consumer B: ' + v));

observable.subscribe(subject);
