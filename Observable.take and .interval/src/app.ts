import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source = interval(1000).pipe(take(10));

source.subscribe(val => console.log(val));