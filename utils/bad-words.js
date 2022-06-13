const Filter = require("bad-words");
const filter = new Filter();

const badWords = function (text) {
  const checkedText = filter.clean(text);
  const bleep = /[\*]+/;

  if (bleep.test(checkedText)) {
    return true;
  } else {
    return false;
  }
};

module.exports = badWords;
