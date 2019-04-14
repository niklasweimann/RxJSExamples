import { interval } from 'rxjs';
import { take, publish } from 'rxjs/operators';

let source = interval(1000)
    .pipe(
        take(6),
        publish()
    );

source.connect();

setTimeout(function () {
    source.subscribe(x => console.log('sub 1: ', x));
}, 2700);


setTimeout(function () {
    source.subscribe(x => console.log('                sub 2: ', x));
}, 3700);