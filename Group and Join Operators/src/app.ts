import { of } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

const source = of<IPeople>(
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 });

const example = source.pipe(
    groupBy(person => person.age),
    mergeMap(group => group.pipe(toArray()))
);

const subscribe = example.subscribe(val => console.log(val));

interface IPeople {
    name: string;
    age: number;
}