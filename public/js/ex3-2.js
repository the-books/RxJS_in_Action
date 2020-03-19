const { of } = rxjs;
const { map, tap } = rxjs.operators;

const addSixPersent = x => x + (x * .06);
of(10.0, 20.0, 30.0, 40.0)
  .pipe(
    map(addSixPersent),
  )
  .subscribe(console.log);
