// NOT WORKING IN NODE.JS
import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';

const myInterval = interval(1000);
const bufferBy = fromEvent(document, 'click');

const myBufferedInterval = myInterval.pipe(buffer(bufferBy));

const subscribe = myBufferedInterval.subscribe(val =>
    console.log(' Buffered Values:', val)
);