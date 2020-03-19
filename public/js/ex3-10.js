const { from } = rxjs;
const { filter, map } = rxjs.operators;

const original = [1, 2, 3];

from(original)
  .pipe(
    filter(x => {
      console.log(`filtering ${x}`);
      return x % 2 !== 0;
    }),
    map(x => {
      console.log(`mapping ${x}`);
      return x * x;
    })
  )
  .subscribe(console.log);
