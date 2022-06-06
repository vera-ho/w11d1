// import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
// import Board from "./board";

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {status: ""}
    }

    handleClick() {

    }

    render() {

        return(
            <div className="tile" onClick={this.handleClick}>
            </div>
        )

    }
}