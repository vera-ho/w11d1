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
        this.handleClick = this.handleClick.bind(this);
        this.checkTileState = this.checkTileState.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let flagged = e.altKey;

        let bombCount = this.props.tile.adjacentBombCount() 
        bombCount === 0 ? bombCount = null : bombCount

        if (!this.props.tile.explored && !this.props.tile.bombed && !e.altKey) {
            this.setState({ status: "revealed", text: bombCount })
        } else if (this.props.tile.bombed){
            this.setState({ status: "bombed", text: "B" })
        } else if (e.altKey){
            if(!this.props.tile.flagged) {
                this.setState({ status: "flagged", text: "F" })
            } else {
                this.setState({ status: "tile", text: "" })
            }
        } 
        this.props.update(this.props.tile, flagged);
    }

    checkTileState() {
        if(this.props.tile.explored) {
            this.setState({ status: "revealed", text: "" })
        }
    }

    render() {
        this.checkTileState();

        return(
            (<div className={this.state.status} onClick={this.handleClick}>
            {this.state.text}
        </div>)
        )

    }
}