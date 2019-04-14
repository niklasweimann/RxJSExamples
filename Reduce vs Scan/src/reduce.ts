import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

console.time('timer');

const source = interval(100).pipe(
    take(4),
    reduce((acc, val) => acc + val));

source.subscribe((value) => {
    console.timeEnd('timer');
    console.log('in next. Value: ', value);
});
