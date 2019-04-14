import { from } from 'rxjs';

let words = ['coding blast', 'coding', 'blast'];

let source = from(words);

source.subscribe((value: any) => {
    console.log('next: ', value);
}, (err: any) => {
    console.log('error: ', err);
}, () => {
    console.log('complete');
});