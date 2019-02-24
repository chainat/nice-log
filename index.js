const { toLocalDate } = require('./tasks/date.task');
const { niceLog, condenseSpace } = require('./tasks/formatLog.task');
const { stdin, stdout } = process;

stdin.on('data', (f) => {
  let data = f.toString();
  data = toLocalDate(data);
  data = condenseSpace(data);
  stdout.write(data);
  niceLog();
});
