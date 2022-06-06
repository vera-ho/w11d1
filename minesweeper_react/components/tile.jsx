// import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
// import Board from "./board";

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "tile",
            text: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }



    handleClick(e) {
        e.preventDefault();
        console.log(e);

        let bombCount = this.props.tile.adjacentBombCount() 
        bombCount === 0 ? bombCount = null : bombCount

        if (!this.props.tile.explored && !this.props.tile.bombed && !e.altKey) {
            console.log("revealed")
            this.setState({ status: "revealed", text: bombCount })

        } else if (this.props.tile.bombed){
            console.log("bombed")
            this.setState({ status: "bombed", text: "B" })

        } else if (e.altKey){
            console.log("flagged")
            this.setState({ status: "flagged", text: "F" })

        } 
        this.props.update();
    }

    render() {
        return(
            (<div className={this.state.status} onClick={this.handleClick}>
            {this.state.text}
        </div>)
        )

    }
}