const Filter = require("bad-words");
const filter = new Filter();

// const text = "good";

console.log(filter.clean(text));

const badWords = function (text) {
  const checkedText = filter.clean(text);
  const bleep = /[\*]+/;

  if (bleep.test(checkedText)) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkedText);
// const result = badWords(text);
// consol.log(result);

module.exports = badWords;
