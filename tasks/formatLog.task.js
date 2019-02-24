const { localDateFormat } = require('./date.task');
const { stdout } = process;

const ADD_BLANK_LINE_WAIT = 10 * 1000;
const BIG_GAP_REGEX = /([\s]{5,}\|)/g

let checkTimeout = null;
const niceLog = () => {
  if (checkTimeout) {
    clearTimeout(checkTimeout);
  }
  checkTimeout = setTimeout(()=> {
    const blank = [
      '\n\n\n\n\n',
      'Blank lines added at: ',
      localDateFormat(new Date()),
      `\n${new Array(50).join('=')}\n`,
    ].join('');
    stdout.write(blank);
  }, ADD_BLANK_LINE_WAIT);
}


/**
*
*/
const condenseSpace = (data) => {
  return data.replace(BIG_GAP_REGEX, ' |');
}

module.exports = {
  niceLog,
  condenseSpace,
}
