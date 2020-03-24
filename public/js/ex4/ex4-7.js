const { of } = rxjs;
const { tap, delay, timeInterval, map } = rxjs.operators;

of([10, 20, 30, 40, 50, 60, 70])
  .pipe(
    tap(x => console.log(`Emitted: ${x}`)),
    // delay(2000),
  ).subscribe(x => console.log(`Received: ${x}`));
