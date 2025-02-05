import {Observable, Observer} from 'rxjs';
const observable = new Observable((observer: Observer<any>) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.complete();
    observer.next('4');
});
observable.subscribe((value) => console.log(value));
observable.subscribe((value) => console.log(value));
