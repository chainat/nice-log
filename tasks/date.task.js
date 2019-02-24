const UTC_FORMAT_REGEX = /([\d-]{10}T[\d\:\.]{9,12}Z)/g;
const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

const pad = (num, pad=2) => {
  const padded = [new Array(pad).join('0'), num].join('');
  return padded.substr(padded.length - pad, pad);
};

/**
* Show formtted date
* @todo - better way to detect from user timezone and use those format
*/
const localDateFormat = (date) => {
  return [
    [ pad(date.getDate()),
      pad(date.getMonth()+1),
      date.getFullYear() ].join('/'),
    [ pad(date.getHours()),
      pad(date.getMinutes()),
      pad(date.getSeconds())].join(':'),
  ].join(' ')
}

/**
* Turn UTC datetime to local time
*/
const toLocalDate = (data) => {
  let out = data;
  const matches = out.match(UTC_FORMAT_REGEX);
  if (matches) {
    matches.map((tz) => {
      const localDateTime = localDateFormat(new Date(tz));
      out = out.replace(tz, `${YELLOW}${localDateTime}${RESET}`);
      return null;
    });
  }
  return out;
}

module.exports = {
  toLocalDate,
  localDateFormat,
}
