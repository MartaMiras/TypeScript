/**
 * START: Follow the instructions below.
 */

// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.

function identity<Type>(value: Type): Type {
    return value;
}

let value1: string = identity("France");

let value2: number = identity(67_413_000);

// ----

async function fetchData<Type>(url: string): Promise<Type> {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.

let user: User = await fetchData<User>("http://api.com/user/1");

console.log(user.name);

// ----

export {};