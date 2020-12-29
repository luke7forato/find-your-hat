const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const char = '░';
const path = '*';

class Field {
    constructor() {
        this._field = [
            [char, char, char, hat, char ],
            [char, char, char, char, char],
            [char, char, path, char, char],
            [char, char, char, char, char],
            [char, char, char, char, char],
        ];
    }

    showField() {
        for(let i = 0; i < this._field.length; i++) {
            const field = this._field[i].join('');
            console.log(field);
        }
        
    }

    //return an array with a position for the path
    findIndex() {
        const field = this._field;
        let place = [];
        field.forEach(field => {
            const index = field.indexOf('*');
            place.push(index);
        });
        return place;
    }

    positionY() {
        let index = this.findIndex();
        let pY;
        for(let i = 0; i < index.length; i++) {
            if(index[i] !== -1) {
                pY = index[i];
            }
        }
        return pY;
    }

    //this is not working
    positionX() {
        let index = this.findIndex();
        let pX;
        for(let i = 0; i < index.length; i++) {
            if(index[i] !== -1) {
                pX = i;
            }
        }
        return pX;
        
    }


    goUp() {
        let x = this.positionX();
        let y = this.positionY();
        this._field[x][y] = char;
        if(x > 0) {
            x--
        }
        this._field[x][y] = path;
        return this._field;
    }

    goDown() {
        let x = this.positionX();
        let y = this.positionY();
        this._field[x][y] = char;
        if(x < 4) {
            x++
        }
        this._field[x][y] = path;
        return this._field;
    }

    goLeft() {
        let x = this.positionX();
        let y = this.positionY();
        this._field[x][y] = char;
        if(y > 0) {
            y--
        }
        this._field[x][y] = path;
        return this._field;
    }

    goRight() {
        let x = this.positionX();
        let y = this.positionY();
        this._field[x][y] = char;

        if(x < 4) {
            y++
        }
        this._field[x][y] = path;
        return this._field;
    }

    move() {
        const direction = prompt('Which way (up, down, left, right)?');
        let newPosition = [];
        switch (direction) {
            case 'up':
                newPosition = this.goUp();
                this._field = newPosition;
                break;
            case 'down':
                newPosition = this.goDown();
                this._field = newPosition;
                break;
            case 'left':
                newPosition = this.goLeft();
                this._field = newPosition;
                break;
            case 'right':
                newPosition = this.goRight();
                this._field = newPosition;
                break;
        }
    }
};

const myField = new Field();
myField.showField();
myField.move();
myField.showField();
myField.move();
myField.showField();
myField.move();
myField.showField();
myField.move();
myField.showField();