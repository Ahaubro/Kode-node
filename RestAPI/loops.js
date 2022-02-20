// Smatrphones


//Why dont we like forloops in JS
//Overly verbose
//not functional
//error prone

const smartphones = [

    {brand: "Samsung", price: 4500 },
    {brand: "Iphone", price: 7200 },
    {brand: "Sony Experia", price: 3800 },
    {brand: "Nokia", price: 2500 }

];

// FORKERT
const discountedSmartphones = smartphones.map(smartPhone => {
    smartPhone.price -= 500;
    return smartPhone;

}); 

console.log(discountedSmartphones);

// All above 4k be gone

const cheapPhones = smartphones.filter(smartphone => smartphone.price <= 4000);

console.log(smartphones);
console.log(cheapPhones);