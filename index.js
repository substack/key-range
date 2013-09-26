module.exports = function (key, opts) {
    if (opts.lt !== undefined && !(key < opts.lt)) return false
    if (opts.lte !== undefined && !(key <= opts.lte)) return false
    if (opts.gt !== undefined && !(key > opts.gt)) return false
    if (opts.gte !== undefined && !(key >= opts.gte)) return false
    
    if (opts.start !== undefined && key < opts.start) return false
    if (opts.end !== undefined && key > opts.end) return false
    if (opts.min !== undefined && key < opts.min) return false
    if (opts.max !== undefined && key > opts.max) return false
    
    return true
};
