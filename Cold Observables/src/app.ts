import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

let source =
    interval(1000)
        .pipe(
            take(6)
        );

source.subscribe(x => console.log('sub 1: ', x));

setTimeout(function () {
    source.subscribe(x => console.log('                sub 2: ', x));
}, 2700);