class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    getName() {
        return this._name;
    }

    getLevel() {
        return this._level;
    }

    getNumberOfStudents() {
        return this._numberOfStudents;
    }

    setNumberOfStudents(number) {
        if (typeof number === 'number') {
            this._numberOfStudents = number;
        } else {
            console.log(`${number} is not a number!`)
        }
    }

    quickFacts(name, level, numberOfStudents) {
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        index = Math.floor(substituteTeachers.length - 1 * Math.random());

        return substituteTeachers[index];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    getPickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    getSportsTeams() {
        console.log(this._sportsTeams);
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury.quickFacts());
const teachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
//console.log(lorraineHansbury.pickSubstituteTeacher(teachers));

var teams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
const alSmith = new HighSchool('Al. E. Smith', 415, teams);

alSmith.getSportsTeams();