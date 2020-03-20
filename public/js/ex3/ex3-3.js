const { from } = rxjs;
const { map, tap } = rxjs.operators;

from([
  'The quick brown fox',
  'jumps over the lazy dog'
])
  .pipe(
    map(str => str.split(' ')),
    tap(arr => console.log(arr.length))
  )
  .subscribe(x => console.log(x));
