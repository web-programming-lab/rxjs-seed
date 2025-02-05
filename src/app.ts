import {Observable, Observer} from 'rxjs';
const observable = new Observable((observer: Observer<any>) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
});
observable.subscribe((value) => console.log(value));
