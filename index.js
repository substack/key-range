module.exports = function (key, opts) {
    if (opts.lt && !(key < opts.lt)) return false
    if (opts.lte && !(key <= opts.lte)) return false
    if (opts.gt && !(key > opts.gt)) return false
    if (opts.gte && !(key >= opts.gte)) return false
    
    if (opts.start && key < opts.start) return false
    if (opts.end && key > opts.end) return false
    if (opts.min && key < opts.min) return false
    if (opts.max && key > opts.max) return false
    
    return true
};
