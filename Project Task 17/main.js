// create parentschool class
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
      return this._name;
    }

    get level() {
      return this._level;
    }

    get numberOfStudents() {
      return this._numberOfStudents
    }

    set numberOfStudents(newNumberOfStudents){
      if (typeof numberOfStudents === "number"){
        this._numberOfStudents = newNumberOfStudents;
      } else{
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }

    // quickFacts(){
    //   console.log("SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.");
    // }

  quickFacts() {
    console.log(this._name + " educates " + this._numberOfStudents + " students at the " + this._level + " school level.");
  }

    static pickSubstituteTeacher(substituteTeachers){
      let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      console.log('output of pickSubstituteTeacher()',substituteTeachers[randomNumber]);
      return substituteTeachers[randomNumber];
    }
}
//create primaryschool class


class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
  
}

// create highschool class

class HighSchool extends School{
  constructor(name, numberOfStudents ,sportsTeams){
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

//Instances of PrimarySchool and HighSchool
 
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(lorraineHansbury.pickupPolicy);

let arrayOfSubstituteTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

School.pickSubstituteTeacher(arrayOfSubstituteTeacher);

let arrayOfSportsTeam = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
const alSmith = new HighSchool('Al E. Smith',415,arrayOfSportsTeam);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);