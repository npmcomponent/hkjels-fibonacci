
/**
 * Expose `fibonacci`.
 */

module.exports = fibonacci;

/**
 * Fibonacci sequence.
 */

function fibonacci(n) {
  return Array.apply(0, Array(n)).reduce(function(x, y, z) {
    return x.concat((z < 2) ? z : x[z-1] + x[z-2]);
  }, []);
}

