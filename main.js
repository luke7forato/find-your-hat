const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const char = '░';
const path = '*';

class Field {
    constructor() {
        this._field = [
            [path, char, hole, hole, hole ,char, char, hole, hole, char, char, char, char, char, char, char, char, char, hole, hole, char, hole, hole, char,char, char, char, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, char, char, char, hole,char, char, char, char, char, char, char, char, char, hole, char, char, char, hole, char,char, hole, hole, char, hole, hole],
            [char, hole, char, hole, char, hole, hole, char, char, char, hole, hole, hole, hole, hole, hole, char, char, char, char, char, char, hole, hole,char, hole, hole, char, hole, hole],
            [char, hole, char, char, char, hole, hole, char, char, ,char, hole, hole, char, char, char, char, hole, char, hole, char, char, char, char, hole,hole, char, hole, char, char, hole],
            [char, char, char, hole, hole, char, hole, hole, hole, ,char, hole, hole, char, char, char, char, hole, char, char, hole, hole, hole, char, char,char, char, hole, char, char, hole],
            [char, hole, hole, hole, hole, char, char, char, hole, ,hole, hole, hole, char, char, char, char, hole, char, hole, hole, char, hole, char, hole,hole, char, char, char, char, hole],
            [char, char, char, hole, hole, hat, char, char, hole, ,hole, char, hole, char, hole, char, char, hole, hole, hole, char, char, hole, char, hole,hole, hole, char, char, hole, hole],
            [char, hole, char, hole, hole, hole, char, char, char, ,char, char, hole, char, char, hole, char, hole, hole, hole, char, char, hole, hole, hole,char, char, hole, char, hole, hole],
            [hole, hole, char, hole, hole, hole, char, char, char, ,char, char, hole, char, char, hole, char, hole, hole, char, char, char, char, char, char,char, char, char, char, hole, hole],
            [hole, hole, hole, hole, hole, char, char, hole, hole, ,hole, char, char, char, char, hole, char, char, char, char, char, char, char, char, char,hole, char, char, char, hole, hole],
        ];
    }

    showField() {
        for(let i = 0; i < this._field.length; i++) {
            const field = this._field[i].join('');
            console.log(field);
        }
        
    }

    //return an array with a position for the path
    findIndex(p) {
        const field = this._field;
        let place = [];
        field.forEach(field => {
            const index = field.indexOf(p);
            place.push(index);
        });
        return place;
    }

    positionY(p) {
        let index = this.findIndex(p);
        let pY;
        for(let i = 0; i < index.length; i++) {
            if(index[i] !== -1) {
                pY = index[i];
            }
        }
        return pY;
    }

    //this is not working
    positionX(p) {
        let index = this.findIndex(p);
        let pX;
        for(let i = 0; i < index.length; i++) {
            if(index[i] !== -1) {
                pX = i;
            }
        }
        return pX;
        
    }


    goUp() {
        let x = this.positionX('*');
        let y = this.positionY('*');
        this._field[x][y] = char;
        if(x > 0) {
            x--
        }
        if(this._field[x][y] === hole) {
            console.log('you fell in the hole!');
        } else if(this._field[x][y] === hat) {
            console.log('you found the hat!');
        } else {
            this._field[x][y] = path;
        }
        return this._field;
    }

    goDown() {
        let x = this.positionX('*');
        let y = this.positionY('*');
        this._field[x][y] = char;
        if(x < 10) {
            x++
        }
        if(this._field[x][y] === hole) {
            console.log('you fell in the hole!');
        } else if(this._field[x][y] === hat) {
            console.log('you found the hat!');
        } else {
            this._field[x][y] = path;
        }
        return this._field;
    }

    goLeft() {
        let x = this.positionX('*');
        let y = this.positionY('*');
        this._field[x][y] = char;
        if(y > 0) {
            y--
        }
        if(this._field[x][y] === hole) {
            console.log('you fell in the hole!');
        } else if(this._field[x][y] === hat) {
            console.log('you found the hat!');
        } else {
            this._field[x][y] = path;
        }
        return this._field;
    }

    goRight() {
        let x = this.positionX('*');
        let y = this.positionY('*');
        this._field[x][y] = char;

        if(x < 29) {
            y++
        }
        if(this._field[x][y] === hole) {
            console.log('you fell in the hole!');
        } else if(this._field[x][y] === hat) {
            console.log('you found the hat!');
        } else {
            this._field[x][y] = path;
        }
        return this._field;
    }

    move() {
        const direction = prompt('Which way?');
        let newPosition = [];
        switch (direction) {
            case 'w':
                newPosition = this.goUp();
                this._field = newPosition;
                break;
            case 's':
                newPosition = this.goDown();
                this._field = newPosition;
                break;
            case 'a':
                newPosition = this.goLeft();
                this._field = newPosition;
                break;
            case 'd':
                newPosition = this.goRight();
                this._field = newPosition;
                break;
        }
    }

    checkLife() {
        let life = this.findIndex('*');
        life = life.reduce((a, b) => a + b, 0);
            if(life === -10) {
                return false;
            } else {
                return true;
            }
    }
};

const myField = new Field();

function game(array) {
    array.showField();
    do
    array.move(),
    array.showField();
    while(array.checkLife() === true);
    
    
}

game(myField);