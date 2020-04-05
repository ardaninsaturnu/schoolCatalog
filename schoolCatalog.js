//firstly we'll create parent Class

class School {
    constructor(name, level, numberOfStudents) {
            this._name = name;
            this._level = ['primary', 'middle', 'high'];
            this._numberOfStudents = numberOfStudents;
        }
        //lets make getters
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }

    get numberOfStudents() {
            return this._numberOfStudents;
        }
        //NaN method can u research about that please
    set numberOfStudents(newNumberOfStudents) {
        if (newNumberOfStudents.isNaN()) {
            console.log(`Invalid input: ${this._numberOfStudents} must be set to a Number.`)
        } else {
            return this._numberOfStudents = newNumberOfStudents
        }
    }

    //methods

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    //static methods

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);

        return substituteTeachers[randomIndex];
    }

}

//Let's create second class

class PrimarySchool extends School {
    constructor(name, pickupPolicy, numberOfStudents) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;

    }
    get pickupPolicy() {
        return this._pickupPolicy
    }
}

//Let's create last child class

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = []
    }
    get sportsteams() {
        return this._sportsTeams
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514)

console.log(lorraineHansbury.quickFacts());

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams)