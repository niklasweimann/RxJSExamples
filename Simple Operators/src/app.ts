import { of } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

const observer = of(1, 2, 3)
    .pipe(
        map(data => data * 10),
        filter(x => x < 25),
        reduce((acc, cur) => acc + cur))
    .subscribe(val => console.log(val));