import { interval } from 'rxjs';

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscrition = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscrition);

setTimeout(() => {
    subscription.unsubscribe();
}, 1000);