import { interval } from 'rxjs';
import { take, map, filter, scan } from 'rxjs/operators';


let source = interval(400).pipe(
  take(9),
  map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]));

// TODO: Create an Observable `result` that emits the 
// sum of all numbers in source. Use pure functions
// such as map, filter, reduce, scan, merge, delay, 
// concat, take, etc.

result.subscribe(x => console.log(x));

