import { interval } from 'rxjs';
import { take, publish, refCount } from 'rxjs/operators';

let source = interval(1000).pipe(
    take(6),
    publish(),
    refCount());

setTimeout(function () {
    source.subscribe(x => console.log('sub 1: ', x));
}, 2700);


setTimeout(function () {
    source.subscribe(x => console.log('                sub 2: ', x));
}, 4100);