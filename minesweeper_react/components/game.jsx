import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
import Board from "./board"

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(10, 5)
        }
        // debugger
        // this.updateGame = this.updateGame.bind(this);
    }

    updateGame = () => {

    }

    // updateGame() {
    // }

    render() {

        return (
            <div>
                <Board board={this.state.board} update={this.updateGame} />
            </div>
        )
    }
}