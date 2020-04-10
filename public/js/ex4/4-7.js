const { from } = rxjs;
const { delay, map } = rxjs.operators;

const numbers$ = from([99, 77, 88, 55, 11, 22, 33, 44, 66])
  .pipe(
    map(v => delay(2000)),
  );

numbers$.subscribe(x => console.log('Received', x));
