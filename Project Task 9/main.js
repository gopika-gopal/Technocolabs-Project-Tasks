
let raceNumber = Math.floor(Math.random() * 1000);
   // raceNumber = 1000 + raceNumber;
// variable for runner registered early or not
let registeredEarly = false;

// variable for runner's age
let runnersAge = 29;

// if (runnersAge >= 18 && registeredEarly) {
    
// }

if (runnersAge > 18 && registeredEarly) {
    raceNumber = 1000 + raceNumber;
    console.log('Race starts at 9:30 am and your racenumber is ' + raceNumber);
} else if (runnersAge > 18 && !registeredEarly) {
    raceNumber = 1000 - raceNumber;
    console.log('Late adults run at 11:00 am and your race number is ' + raceNumber);
} else if (runnersAge < 18) {
    raceNumber = 1000 - raceNumber;
    console.log('Youth registrants run at 12:30 pm (regardless of registration), your race number is ' + raceNumber);
} else {
    console.log('Others see the registration desk');
}


