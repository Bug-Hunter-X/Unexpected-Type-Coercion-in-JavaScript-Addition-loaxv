function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers.');
  }

  if (a === null || b === null) {
    return 0; // Handle null values
  }

  return a + b;
}

console.log(foo(5, 5));   // Output: 10
console.log(foo(5, '5')); // throws error
console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0