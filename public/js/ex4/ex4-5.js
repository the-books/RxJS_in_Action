const { interval } = rxjs;
const { timeInterval, skip, take, tap, map } = rxjs.operators;

const newRandomNumber = () => Math.floor(Math.random() * 100);
const Money = function(currency, val) {
  return {
    value: function() {
      return val;
    },
    currency: function() {
      return currency;
    },
    toString: function() {
      return `${currency} ${val}`
    }
  };
};
const USDMoney = Money.bind(null, 'USD');

const numbers = interval(1000)
  .pipe(
    timeInterval(),
    skip(1),
    take(10),
    tap(int => console.log(`checking every ${int.interval} milliseconds.`)),
    map(num => new USDMoney(newRandomNumber())),
    map(usd => usd.toString())
  ).subscribe(console.log);
