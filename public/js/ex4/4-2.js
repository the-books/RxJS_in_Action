const { timer } = rxjs;

const time$ = timer(3000, 1000);
time$.subscribe(x => console.log(x));
console.log('start');
