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
        // console.log(this.state.board)
        // debugger
        // this.updateGame = this.updateGame.bind(this);
    }

    updateGame = () => {
        

    }

    // updateGame() {
    // }

    render() {
        // debugger
        return (
            <div>
                <span>HELLO</span>
                <Board board={this.state.board} update={this.updateGame} />
            </div>
        )
    }
}