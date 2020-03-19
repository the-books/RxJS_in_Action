const { from } = rxjs;
const { filter } = rxjs.operators;

const candidates = [
  { name: 'Karl', experience: 'js ts java' },
  { name: 'Han', experience: 'c c++ c#' },
  { name: 'Shultz', experience: 'HTML CSS JS' },
];
const hasJSExperience = bg => bg.toLowerCase().includes('js');

from(candidates)
  .pipe(
    filter(candidate => hasJSExperience(candidate.experience))
  )
  .subscribe(console.log);
