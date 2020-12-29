const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const char = '░';
const path = '*';

class Field {
    constructor() {
        this._field = [
            [char, char, char, hat, char ],
            [char, char, hole, hole, char],
            [char, hole, char, char, char],
            [char, char, char, char, hole],
            [hole, char, char, hole, path],
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

    }

    goDown() {
        let x = this.positionX();
        let y = this.positionY();
        let item = this._field[x][y];
        console.log(item);
        x++;

        
    }

    goLeft() {

    }

    goRight() {

    }
};

const myField = new Field();

myField.goDown();