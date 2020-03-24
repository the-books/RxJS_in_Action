const { from, of } = rxjs;
const { tap, delay, timeInterval, map } = rxjs.operators;

from([10, 20, 30, 40, 50, 60, 70])
  .pipe(
    delay(2000)
  )
  .subscribe(x => console.log(`Received: ${x}`));
