/**
 * START: Follow the instructions below.
 */

type CountryData = {
    name: string;
    languages: string[];
    population: number;
};

// Complete the syntax for this mapped type.
// Hint: Mapped types are generic.
//
// Replace the `never` type with the correct type.
//
// These changes should fix all the type errors.

type Descriptions<Type> = {
    [Property in keyof Type]: `${Type[Property]} is the ${Property}`;
};

const countryDataDescriptions: Descriptions<CountryData> = {
    name: `${"string"} is the name`,
    languages: `${"string[]"} is the languages`,
    population: `${"number"} is the population`,
};

// ----

export {};
