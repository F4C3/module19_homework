class  KitchenAppliacnces {
    constructor ( weight, power, color, prise, is_on ) {
        this.weight = weight,
        this.power = power
        this.color = color,
        this.prise = prise
        this.is_on = is_on
    }

    getValue () {
        console.group(`${this.name} info`);
        console.log( `name is ${this.name}` );
        console.log( `weight is ${this.weight} g` );
        console.log( `power is ${this.power} w` );
        console.log( `color is ${this.color}` );
        console.log( `prisee is ${this.prise} rub` );
        console.groupEnd();
    }

    getIsOn () {
        console.log ( `network connection status is ${this.is_on}` );
    }
}


class Toster extends KitchenAppliacnces {
    constructor (weigth, power, color, prise, mode, cell, is_on) {
        super (weigth, power, color, prise, is_on);
        this.name = 'Toaster';
        this.mode = mode;
        this.cell= cell;
    }

    getValue () {
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

class Microwave extends KitchenAppliacnces {
    constructor (weigth, power, color, prise, screen, modes, is_on) {
        super (weigth, power, color, prise, is_on);
        this.name = 'Microwave';
        this. screen = screen;
        this.modes = modes;
    }

    getValue () {
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


const samsung = new Toster(3000, 700, 'white', 4799, 'no', 5, 'yes');
const bosch = new Microwave(1000, 850, 'black', 2900, 2, 2, 'no');

samsung.getValue()
samsung.getIsOn()
bosch.getValue()
bosch.getIsOn()