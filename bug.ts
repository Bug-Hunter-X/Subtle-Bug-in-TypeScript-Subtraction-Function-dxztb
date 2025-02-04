function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // bug: should be a - b
}

console.log(add(1, 2)); // Output: 3
console.log(subtract(5, 3)); // Output: 2