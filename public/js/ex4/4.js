const { Observable } = rxjs;

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  const timeoutId = setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
    subscriber.next(4);
  }, 5000);
  subscriber.next(5);
  return () => {
    console.log('unsubscribe...');
    clearTimeout(timeoutId);
  };
});

const subscription = observable.subscribe({
  next: x => {
    console.log('next: ' + x); 
  },
  error: err => {
    console.error('error: ' + err);
  },
  complete: () => {
    console.log('done');
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
