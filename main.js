"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		clear();

		// Replace with your own code //
		for (const row of this.field) {
			console.log(row.join(""));
		}
	}

	// Your Code //

	handleMove(direction) {
        switch (direction.toLowerCase()) {
            case 'u':
                this.positionRow -= 1;
                break;
            case 'd':
                this.positionRow += 1;
                break;
            case 'l':
                this.positionCol -= 1;
                break;
            case 'r':
                this.positionCol += 1;
                break;
            default:
                console.log('Invalid direction. Please use u, d, l, or r.');
                return 'continue';
        }

		if (this.positionRow < 0 || this.positionRow >= this.field.length || this.positionCol < 0 || this.positionCol >= this.field[0].length) {
            console.log('Out of bounds instruction! You lose.');
            return 'lose';
        }
        const landingSpot = this.field[this.positionRow][this.positionCol];
        if (landingSpot === hole) {
            console.log('Sorry, you fell down a hole! You lose.');
            return 'lose';
        } else if (landingSpot === hat) {
            console.log('Congrats, you found your hat! You win!');
            return 'win';
        }

        this.field[this.positionRow][this.positionCol] = pathCharacter;
        return 'continue';
    }

	playGame() {
    let gameStatus = 'continue';
    while (gameStatus === 'continue') {
      this.print();
      const move = prompt("Which way? (u=up, d=down, l=left, r=right) ");

      gameStatus = this.handleMove(move);
    }
  }
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.playGame()
