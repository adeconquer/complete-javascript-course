'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthyear)
}

const olu = new Person('Olu', 1991);
// console.log(olu)

//1. New {} created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically returns {}

const john = new Person('John', 1975);
// john.calcAge();

// Coding Challenge #1
// Your tasks:
// 1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
// 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
// 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`the ${this.make} is going at ${this.speed}km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`the ${this.make} is going at ${this.speed}km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate()
// mercedes.brake()

////ES6 Classes


//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthyear)
    }


}

const jessica = new PersonCl('Jessica', 1996)
// console.log(jessica)

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    },

    get age() {
        return 2037 - this.birthYear;
    }
}

// console.log(account.latest);

account.latest = 50;
// console.log(account.movements)

///////Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }
};

const steven = Object.create(PersonProto);
// console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;

// steven.calcAge();

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
// sara.calcAge();

// Coding Challenge #2
// Your tasks:
// 1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
// 2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
// by 1.6)
// 3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Createanewcarandexperimentwiththe'accelerate'and'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h 
//GOOD LUCK 😀


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    accelerate() {
        this.speed += 10;
        console.log(`the ${this.make} is going at ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`the ${this.make} is going at ${this.speed}km/h`);
    }

    get speedUS() {
        const sUS = this.speed / 1.6;
        console.log(`the ${this.make} is going at ${sUS}mi/h`)
    }
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const dreamCar = new CarCl('Bentley', 120);
// dreamCar.accelerate();
// dreamCar.accelerate();

// dreamCar.speedUS;
// dreamCar.speedUS = 100;
// dreamCar.brake();
// dreamCar.speedUS;

///////Inheritance
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course
}

//linking prototype 
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

Student.prototype.constructor = Student;

const mike = new Student('Mike', 2005, 'Computer Science');
// console.log(mike)
// mike.introduce()


// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an ElectricCar(called'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implementa'chargeBattery'methodwhichtakesanargument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implementan'accelerate'methodthatwillincreasethecar'sspeedby20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Createanelectriccarobjectandexperimentwithcalling'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% GOOD LUCK 😀

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge
}
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`)
}

EV.prototype.constructor = EV

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// console.log(tesla);
// tesla.accelerate();



//INheritance using Classes
class StudentCL extends PersonCl {
    constructor(fullName, birthYear, course) {
        // needs to happen first
        super(fullName, birthYear);
        this.course = course
    }
}

//INheritance using Classes and object.create
// come back again




// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// There's also the static version

class Account {
    //1) public fields (instance)
    locale = navigator.language;

    //2) Private fields
    #movements = [];
    #pin



    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        //Protected property
        this.#pin = pin;

    }



    //3) Public method
    //Public interface

    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }

    //4) Private method
    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// console.log(acc1)
// console.log(acc1.#movements)
// console.log(acc1.#pin)
// console.log(acc1.#approveLoan(1000))


// Coding Challenge #4
// Your tasks:
// 1. Re-createChallenge#3,butthistimeusingES6classes:createan'EVCl' child class of the 'CarCl' class
// 2. Makethe'charge'propertyprivate
// 3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% GOOD LUCK 😀

class EVCl extends CarCl {
    #charge
    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.#charge}%`)
        return this;
    }
    brake() {
        this.speed -= 10;
        console.log(`the ${this.make} is going at ${this.speed}km/h`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian)
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate()
