import { Observable } from 'rxjs';

let words = ['coding blast', 'coding', 'blast'];
let source = Observable.create(
    (observer: { next: (arg0: string) => void; complete: () => void; }) => {
        for (let word of words) {
            observer.next(word);
        }

        observer.complete();
    });

let subscriberA = {
    next(value: any) {
        console.log('Subscriber A - next: ', value);
    },
    complete() {
        console.log('Subscriber A - complete');
    }
};

let subscriberB = {
    next(value: any) {
        console.log('Subscriber B - next: ', value);
    },
    complete() {
        console.log('Subscriber B - complete');
    }
};

source.subscribe(subscriberA);
source.subscribe(subscriberB);