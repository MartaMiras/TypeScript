/**
 * START: Follow the instructions below.
 */

function getPopulation(): any {
    return 69_950_850;
}

// Add a type assertion after the call to `getPopulation()`.
// Hint: What's the actual type of the value returned by `getPopulation()`?

const population = getPopulation() as number; // Type assertion

// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.

// console.log(population.toUpperCase()); // Type Error: Property 'toUpperCase' does not exist on type 'number'
// Correction: Remove the line as 'toUpperCase' is not applicable to numbers.

console.log(population * 2); // Valid

// ----

export {};
