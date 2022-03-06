const counCharacters = (phrase, character = 'B') => {
  let characterCounting = 0;

  for (let i = 0; i < phrase.length; i++) {
    phrase[i] === character ? characterCounting++ : 0;
  }
  return `There are ${characterCounting} ${character} character${
    characterCounting > 1 ? 's' : ''
  } on the pharase`;
};

console.log(counCharacters('BBB'));
console.log(counCharacters('BBB', 'a'));
console.log(counCharacters('andsnsasaj', 'j'));
console.log(
  counCharacters(
    `On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put
into the machine wrong figures, will the right answers come out?’
[...] I am not able rightly to apprehend the kind of confusion of ideas
that could provoke such a question`,
    'b'
  )
);
