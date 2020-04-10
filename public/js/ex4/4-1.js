const { Observable } = rxjs;

const observable = new Observable(subscriber => {
  const timeoutId = setTimeout(() => {
    subscriber.next(1);
    subscriber.complete();
    subscriber.next(2);
  }, 1000);
  return () => clearTimeout(timeoutId);
});

observable.subscribe(x => console.log('next: ' + x));
