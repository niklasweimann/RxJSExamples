import { interval, of } from 'rxjs';
import { take, map, flatMap } from 'rxjs/operators';

const source = interval(100).pipe(take(5), map(n => {
    let observable = of(n + 10);
    return observable;
}));

source.subscribe((value) => {
    console.log('in next. Value: ', value);
});

const source2 = interval(100).pipe(take(5), flatMap(n => {
    let observable = of(n + 10);
    return observable;
}));

source2.subscribe((value) => {
    console.log('in next. Value: ', value);
});