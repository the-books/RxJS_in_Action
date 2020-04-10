const { interval } = rxjs;
const { map, skip, take } = rxjs.operators;

const Money = function(currency, val) {
  return {
    value: function() {
      return val;
    },
    currency: function() {
      return currency;
    },
    toString: function() {
      return `${currency} ${val}`;
    },
  };
};

const newRandomNumber = (limit = 5) => Math.random() * (limit * 2) - limit;
const USDMoney = Money.bind(null, 'USD');

interval(2000)
  .pipe(
    skip(1),
    take(10),
    map(num => new USDMoney(newRandomNumber())),
    map(usd => usd.toString()),
  )
  .subscribe(
    v => console.log(v)
  );
