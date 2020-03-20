const { fromEvent } = rxjs;
const { pluck, filter } = rxjs.operators;

const isNumericalKeyCode = code => code >= 48 && code <=57;
const input = document.querySelector('#input');

fromEvent(input, 'keyup')
  .pipe(
    pluck('keyCode'),
    filter(isNumericalKeyCode)
  )
  .subscribe(code => console.log(`User typed: ${String.fromCharCode(code)}`));
