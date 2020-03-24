const { timer } = rxjs;

const numbers = timer(5000, 1000);
numbers.subscribe(x => console.log(x));
