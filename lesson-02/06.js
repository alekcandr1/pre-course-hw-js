let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressTwo = { ...passportWithAddress, ...passportWithAddress.address, city: 'Bobryisk' };
console.log(passportWithAddress);
console.log(passportWithAddressTwo);