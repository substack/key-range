# key-range

return whether a string key is within a
[leveldown](https://npmjs.org/package/leveldown) style range

# example

``` js
var range = require('key-range');
console.log(range('abc', { start: 'aaa', end: 'azz' }));
console.log(range('xyz', { lt: 'xyz' }));
console.log(range('gz', { gte: 'gz' }));
console.log(range('qrs', { gt: 'q', lt: 'r' }));
```

output:

```
true
false
true
true
```

# methods

``` js
var range = require('key-range')
```

## range(key, opts)

Return a boolean: whether the string `key` matches the range constraints given
by `opts`.

`opts` may include any one of:

* `opts.start`
* `opts.end`
* `opts.lt`
* `opts.lte`
* `opts.gt`
* `opts.gte`
* `opts.min`
* `opts.max`

These correspond to the range options supported by
[leveldown](https://npmjs.org/package/leveldown), although `{lt,gt}{,e}` is
the preferred form.

# install

With [npm](https://npmjs.org) do:

```
npm install key-range
```

# license

MIT
