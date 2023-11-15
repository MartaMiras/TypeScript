/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value: number): number {
    return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5); // Valid

doubleThePopulation(6.12); // Type Error: Argument of type 'number' is expected
// Correction: Remove the line or provide a valid number argument.

doubleThePopulation(8_526); // Valid

doubleThePopulation(false); // Type Error: Argument of type 'number' is expected
// Correction: Remove the line or provide a valid number argument.

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);

    console.log(language1);

    if (language2 !== undefined) {
        console.log(language2);
    }
}

languagesSpoken("Colombia", "Spanish", "English"); // Valid

languagesSpoken("Greece", "Greek"); // Valid

languagesSpoken("New Zealand", "English", "Māori"); // Valid

// ----

export {};
