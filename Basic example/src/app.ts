import { from, Observer } from 'rxjs';

let words = ['coding blast', 'coding', 'blast'];

let source = from(words);

class SimpleObserver implements Observer<string> {
    next(value: any) {
        console.log('next: ', value);
    }

    error(err: any) {
        console.log('error: ', err);
    }

    complete() {
        console.log('complete');
    }
}

const observer: SimpleObserver = new SimpleObserver();

source.subscribe(observer);