// assigning my age to variable myAge
const myAge = 26;

// assigning value 2 to variable earlyYears
let earlyYears = 2;

earlyYears *= 10.5;

// subtracting 2 from myAge and assigning to laterYears
let laterYears = myAge - 2;

// multiplying laterYears by 4 and assiging to same
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// sum of earlyYears and laterYears stored in myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;


// assigning my name to variable myName and converting to lowercase using .toLowerCase()
let myName = "Gopika";
myName = myName.toLowerCase();

console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');
//My name is gopika. I am 26 years old in human years which is 117 years old in dog years.