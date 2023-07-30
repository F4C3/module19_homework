function KitchenAppliacnces (weigth, power, color, prise, is_on) {
    this.weight = weigth;
    this.power = power;
    this.color = color;
    this.prise = prise;
    this.is_on = is_on;
}

KitchenAppliacnces.prototype.getValue = function () {
    console.group(`${this.name} info`);
    console.log( `name is ${this.name}` );
    console.log( `weight is ${this.weight} g` );
    console.log( `power is ${this.power} w` );
    console.log( `color is ${this.color}` );
    console.log( `prisee is ${this.prise} rub` );
    console.groupEnd();
}

KitchenAppliacnces.prototype.getIs_on = function() {
    console.log ( `network connection status is ${this.is_on}` );
}

function Toaster (weigth, power, color, prise, mode, cell, is_on) {
    this.name = 'Toaster';
    this.weight = weigth;
    this.power = power;
    this.color = color;
    this.prise = prise;
    this.mode = mode;
    this.cell = cell;
    this.is_on = is_on;
    this.getValue = function () {
        console.group(`${this.name} info`);
        console.log( `name is ${this.name}` );
        console.log( `weight is ${this.weight} g` );
        console.log( `power is ${this.power} w` );
        console.log( `color is ${this.color}` );
        console.log( `prisee is ${this.prise} rub` );
        console.log( `cell is ${this.cell}` );
        console.log( `mode is ${this.mode}` );
        console.groupEnd();
    }
}

function Microwave (weigth, power, color, prise, screen, modes, is_on) {
    this.name = 'Microwave';
    this.weight = weigth;
    this.power = power;
    this.color = color;
    this.prise = prise;
    this. screen = screen;
    this.modes = modes;
    this.is_on = is_on;
    this.getValue = function () {
        console.group(`${this.name} info`);
        console.log( `name is ${this.name}` );
        console.log( `weight is ${this.weight} g` );
        console.log( `power is ${this.power} w` );
        console.log( `color is ${this.color}` );
        console.log( `prisee is ${this.prise} rub` );
        console.log( `screen is ${this.screen}` );
        console.log( `modes is ${this.modes}` );
        console.groupEnd();
    }
}



Toaster.prototype = new KitchenAppliacnces()
Microwave.prototype = new KitchenAppliacnces()

const samsung = new Microwave (3000, 700, 'white', 4799, 'no', 5, 'yes')
const bosch = new Toaster (1000, 850, 'black', 2900, 2, 2, 'no')

samsung.getValue()
samsung.getIs_on()
bosch.getValue()
bosch.getIs_on()
