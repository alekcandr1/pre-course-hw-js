let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = { ...passportMarried, married: true, address: { ... } };
console.log(passportMarried);
console.log(passportMarried2);
