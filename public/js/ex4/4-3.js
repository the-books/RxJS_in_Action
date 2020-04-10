const { interval } = rxjs;

const time$ = interval(2000);
time$.subscribe(x => console.log(x));
