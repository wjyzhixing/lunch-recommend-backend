'use strict';
const moment = require('moment');

module.exports = {
  json(data, code, msg, addition) {
    return Object.assign({
      result: code ? 'fail' : 'success',
      code: code || 0,
      message: msg,
      data,
    }, addition);
  },
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },

  changeTime(time) {
    return moment(time * 1000).format('YYYY-MM-DD HH:mm:ss');
  },
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },
};
