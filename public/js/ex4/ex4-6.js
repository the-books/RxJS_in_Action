const { timer } = rxjs;
const { delay, timeInterval, map } = rxjs.operators;

const numbers = timer(1000)
  .pipe(
    delay(2000),
    timeInterval()
  ).subscribe(console.log);
