import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function RulesPage() {

    return (<div class="Rules">
        <h1>
        Welcome to Battleship Game!
        </h1>   
        <Card>
			<Card.Header>The rules of the Battle Game</Card.Header>
			<Card.Body>
				<Card.Title>Play with opponent</Card.Title>
				<Card.Text>
					Battleship is a board game that pits 2 players against each other.  
					For this project, you will create a very simple AI that prepares the play area and plays against you.
				</Card.Text>
				<Card.Title>Board and ships</Card.Title>
				<Card.Text>
					A game of Battleship is made up of two 10X10 boards, one that represents the player’s board and one that represents the opponents.  
					At the start of the game, 5 ships are randomly placed on each board (one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship).  
					Each ship should fit entirely on the board and they should not overlap any other ship on the board.
				</Card.Text>
				<Card.Title>Steps in one turn</Card.Title>
				<Card.Text>
				During the game, you and an AI will take turns (the player always goes first).  On your turn, you 
				will select a square on your opponent’s board.  On your opponent’s turn, the AI will randomly
				select a square on your grid.  If you or your opponent hit a ship, then mark that board with a
				color and symbol.  If you or your opponent miss, then mark a spot on the board to remind the
				players where on the board they have attempted.  The AI will not try to hit the same place more
				than once and the user should not be able to select the same spot more than once.
				</Card.Text>
				<Button variant="primary" href="/gameBoard">Go to play!</Button>
			</Card.Body>
        </Card>


    </div>)

}
