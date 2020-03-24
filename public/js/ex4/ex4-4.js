const { interval } = rxjs;
const { skip, take, map } = rxjs.operators;

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
    skip(1),
    take(10),
    map(num => new USDMoney(newRandomNumber())),
    map(usd => usd.toString())
  ).subscribe(console.log);
