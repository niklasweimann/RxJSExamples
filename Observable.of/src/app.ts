import { of } from 'rxjs';
import { map } from 'rxjs/operators';

let source =
    of('coding blast', 'badword', 'coding', 'blast')
        .pipe(
            map(w => w + ' RxJS')
        );

console.log('before subscribe');

source.subscribe(
    function next(value) {
        console.log('Subscriber - next: ', value);
    },
    function error(err) {
        console.log('Subscriber - error: ', err);
    },
    function complete() {
        console.log('Subscriber - complete');
    });

console.log('after subscribe');