var range = require('../');
console.log(range('abc', { start: 'aaa', end: 'azz' }));
console.log(range('xyz', { lt: 'xyz' }));
console.log(range('gz', { gte: 'gz' }));
console.log(range('qrs', { gt: 'q', lt: 'r' }));
