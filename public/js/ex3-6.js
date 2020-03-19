const { from } = rxjs;
const { pluck, reduce } = rxjs.operators;

const twice = [
  { name: "나연", group: "트와이스", birth: "1995-09-22", height: 163, weight: 48 },
  { name: "정연", group: "트와이스", birth: "1996-11-01", height: 167, weight: 49 },
  { name: "모모", group: "트와이스", birth: "1996-11-09", height: 162, weight: 48 },
  { name: "사나", group: "트와이스", birth: "1996-12-29", height: 164, weight: 45 },
  { name: "지효", group: "트와이스", birth: "1997-02-01", height: 160, weight: 47 },
  { name: "미나", group: "트와이스", birth: "1997-03-24", height: 163, weight: 46 },
  { name: "다현", group: "트와이스", birth: "1998-05-28", height: 158, weight: 49 },
  { name: "채영", group: "트와이스", birth: "1999-04-23", height: 160, weight: 47 },
  { name: "쯔위", group: "트와이스", birth: "1999-06-14", height: 170, weight: 49 },
];
const add = (x, y) => x + y;


from(twice)
  .pipe(
    pluck('weight'),
    reduce(add, 0)
  )
  .subscribe(console.log);
