console.clear();

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timeout');
    resolve(123);
  }, 1000);
  console.log('promise started');
});

promise.then(x => console.log('resolved: ' + x));

// TODO: Create an RxJS Observable `observable` with 
// the same behavior as the promise above.

observable.subscribe(x => console.log('next: ' + x));