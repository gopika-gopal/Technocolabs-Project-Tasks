// the value assigned to variable 'kelvin' is of type constant
const kelvin = 299;

// the value stored in variable celsius is 273 subtracted from kelvin
const celsius = kelvin - 273;

// value stored in fahrenheit is as per the below formula
let fahrenheit = celsius * (9 / 5) + 32;


fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit");

// What’s 0 Kelvin in Fahrenheit?
// The temperature is -460 degrees Fahrenheit


// converting celsius to newton scale using the below formula
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log("the value of newton is " + newton);


