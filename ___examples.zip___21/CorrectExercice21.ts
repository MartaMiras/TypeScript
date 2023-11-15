/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
    languages: string[];
    currency?: string;
    population: number;
}

// Change the `PartialCountry` type to use the `Partial` utility type.
// This should fix the type error for the `countryA` object.

type PartialCountry = Partial<Country>; // Use the `Partial` utility type

const countryA: PartialCountry = {
    code: "CN",
    population: 1_412_600_000,
};

// Change the `CompleteCountry` type to use the `Required` utility type.
// This should cause a type error for the `countryB` object.
// Fix the type error by adding the missing property to the object.

type CompleteCountry = Required<Country>; // Use the `Required` utility type

const countryB: CompleteCountry = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"],
    population: 10_678_632,
};

// Change the `ReadonlyCountry` type to use the `Readonly` utility type.
// This should cause a type error in the code below.
// Remove the code that is incorrect.

type ReadonlyCountry = Readonly<Country>; // Use the `Readonly` utility type

const countryC: ReadonlyCountry = {
    name: "Italy",
    code: "IT",
    languages: ["Italian"],
    population: 60_317_116,
};

// The following line will cause a type error and is removed.
// countryC.population = 60_317_117;

console.log(countryC);

// Change the `CountryWithPopulation` type to use the `Pick` utility type.
// Hint: The syntax is: Pick<Type, Keys>
// This should fix the type error for the `countryD` object.

type CountryWithPopulation = Pick<Country, "name" | "code" | "population">; // Use the `Pick` utility type

const countryD: CountryWithPopulation = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
};

// Change the `CountryWithoutPopulation` type to use the `Omit` utility type.
// This should fix the type error for the `countryE` object.

type CountryWithoutPopulation = Omit<Country, "population">; // Use the `Omit` utility type

const countryE: CountryWithoutPopulation = {
    name: "Thailand",
    code: "TH",
    languages: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    currency: "Baht",
};

// ----

export {};
