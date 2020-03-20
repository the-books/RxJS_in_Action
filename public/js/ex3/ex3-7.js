const { from } = rxjs;
const { filter, reduce } = rxjs.operators;

const candidates = [
  { name: 'Karl', experience: 'js ts java' },
  { name: 'Han', experience: 'c c++ c#' },
  { name: 'Shultz', experience: 'HTML CSS JS' },
];
const hasJSExperience = bg => bg.toLowerCase().includes('js');

from(candidates)
  .pipe(
    filter(candidate => {
      const bg = candidate.experience.toLowerCase();
      return bg.includes('ts') || bg.includes('c#');
    }),
    reduce((acc, obj) => {
      acc.push(obj.name);
      return acc;
    }, [])
  )
  .subscribe(console.log);
