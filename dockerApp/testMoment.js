const moment = require('moment');

let a = moment().subtract(5000, 'ms').format("YYYY-MM-DDTHH:mm:ss");

let b = "2018-12-27T10:45:23";

console.log(moment.isDate(new Date(b)));

console.log(moment().isAfter(a));

