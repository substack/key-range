var test = require('tape');
var range = require('../');

test('ranges', function (t) {
    t.plan(4);
    t.equal(range('abc', { start: 'aaa', end: 'azz' }), true);
    t.equal(range('xyz', { lt: 'xyz' }), false);
    t.equal(range('gz', { gte: 'gz' }), true);
    t.equal(range('qrs', { gt: 'q', lt: 'r' }), true);
});
