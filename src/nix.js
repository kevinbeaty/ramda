var _curry1 = require('./internal/_curry1');
var _nix = require('./internal/_nix');

/**
 * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
 * underlying function would return a false-y value, and `false` when it would return a truth-y one.
 *
 * @func
 * @memberOf R
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @return {Function} a function that applies its arguments to `f` and logically inverts its output.
 * @example
 *
 *      var gt10 = function(x) { return x > 10; };
 *      var f = R.nix(gt10);
 *      f(11); //=> false
 *      f(9); //=> true
 */
module.exports = _curry1(_nix);
