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
            [char, hole, hole, char, char],
            [char, char, char, char, hole],
            [hole, path, char, hole, hole],
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

    position() {
        const field = this._field;

        field.forEach(field => {
            const index = field.indexOf('*');
            if(index !== -1) {
                pX = index;
            }
        });
        
        let index = this.findIndex();
        let coordinates = [];
        for(let i = 0; i < index.length; i++) {
            if(index[i] !== -1) {
                pY = index[i];
            }
        }
        return pY;
    }

    positionX() {
        const field = this._field;
        let pX;
        
        return pX;
    }

    goUp() {

    }

    goDown() {

    }

    goLeft() {

    }

    goRight() {

    }
};

const myField = new Field();

