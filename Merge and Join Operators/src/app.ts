import { of, forkJoin } from 'rxjs';
const s1 = of(1, 2, 3);
const s2 = of(7, 8, 9);
const s3 = of(4, 5, 6);

const merge = forkJoin(s1, s2, s3);
merge.subscribe(
    (x) => {
        console.log(x)
    }, (err) => {
        console.log(err)
    }, () => {
        console.log('Finished')
    })