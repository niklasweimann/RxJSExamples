import { Observable } from 'rxjs';
// each subscribe gets its own execution
var observable = Observable.create(function (source) {
    source.next(Math.random());
});

observable.subscribe(v => console.log('consumer A: ' + v));
observable.subscribe(v => console.log('consumer B: ' + v));