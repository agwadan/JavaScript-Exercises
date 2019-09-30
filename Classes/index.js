


/******************************************************************** */

//CONSTRUCTORS
//This is a function that is executed when a new instance of an object is created

class Bus {
    constructor(id){
        this.id = id;
    }
}

let coaster = new Bus(12);
coaster.id = 13; //Reassigning a value to coaster
console.log(coaster.id);

/****************************************************************** */


//METHODS
//Functions that exist within an object

class Bike {
    constructor(id, origin){
        this.id = id;
        this.origin = origin;
    }

    /**Function keyword not required when creating these methods */
    description(){
        return `
            Bike Id: ${this.id},
            Bike Origin: ${this.origin}
        `
    }
}

let kawasaki = new Bike(123, "Japan");
console.log(kawasaki.description());


/***************************************************************** */


//INHERITANCE

//Example 1

class Device{
    constructor(){
        this.type = 'phone';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Phone extends Device {
    
}

let iphone = new Phone();
console.log(iphone.type);



//Example 2
//having to use the super function

class Shoes {
    constructor(){
        this.type = 'sandle';
    }
    clean(){
        return `Cleaning: ${this.type}`;
    }
}

class Umoja extends Shoes {
    constructor(){
        super(); //This is required when the inheriting class should have a constructor as well
    }
}

let umoja = new Umoja();
console.log(umoja.type);

//Example 3

class Devices{
    constructor(){
        this.type = 'phone';
    }
    starts(){
        return `Starting: ${this.type}`;
    }
}

class Phones extends Devices {
    starts(){
        return 'this phone ' + super.start();
    }
    
}

let iphones = new Phones();
console.log(iphones.type);


/******************************************** */

//IMPORTING MODULES
//Example 1


import { Car } from './models/car';

let car = new Car(123);
console.log(car.id);