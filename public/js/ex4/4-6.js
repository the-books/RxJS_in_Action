const { from } = rxjs;
const { tap, delay } = rxjs.operators;

const numbers$ = from([1, 2, 3, 4, 5])
  .pipe(
    tap(x => console.log('Emitted: ', x)),
    delay(2000),
  );

numbers$.subscribe(x => console.log('Received', x));
