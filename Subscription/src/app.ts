import { interval } from 'rxjs';
const observable = interval(1000);
const subscrition = observable.subscribe(x => console.log(x));
subscrition.unsubscribe();