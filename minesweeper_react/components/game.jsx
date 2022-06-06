import * as Minesweeper from "../minesweeper.js";
import React from "react";
import { ReactDOM } from "react";
import Board from "./board"

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(10, 15)
        }
    }

    updateGame = (tile, flagged) => {
        if(flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    // updateGame() {
    // }
    win() {
        // debugger
        // let winState = false;
        if(this.state.board.won()) {
            // winState = true;
            return "You win!"
        } 
    }

    lose() {
        let loseState = false;
        if(this.state.board.lost()) {
            return "Game over!";
        }
    }

    render() {
        // debugger
        return (
            <div>
                <span>Play some Minesweeper!</span>
                <br></br>
                <Board board={this.state.board} update={this.updateGame} />
                
                <span className="win">{this.lose()}</span><br></br>
            </div>
        )
    }
}