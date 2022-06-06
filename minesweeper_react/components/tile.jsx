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

        
        // if (e.altKey){
        //     if(!this.props.tile.flagged) {
        //         this.setState({ status: "flagged", text: "F" })
        //     } else {
        //         this.setState({ status: "tile", text: "" })
        //     }
        // }
        this.props.update(this.props.tile, flagged);
    }

    checkTileState() {
    }

    render() {
        // this.checkTileState();
        let type = "";
        let text = "";
        let bombCount = this.props.tile.adjacentBombCount() ;
        bombCount === 0 ? bombCount = null : bombCount;
      
        // debugger
        if (!this.props.tile.explored) {
            type = "tile";
            text = "";
        } else 
        if (this.props.tile.explored && !this.props.tile.bombed) {
            type = "revealed";
            text = bombCount;
            // this.setState({ status: "revealed", text: bombCount })
        } else if (this.props.tile.bombed){
            type = "bombed";
            text = "B";
            // this.setState({ status: "bombed", text: "B" })
        } else if(this.props.tile.flagged) {
            type = "flagged";
            text = "F";
        } else {
            type = "revealed";
            text = "";
        }
        // } else if(this.props.tile.explored && !this.props.tile.bombed) {
        //     type = "revealed";
        //     text = "";
        //     // this.setState({ status: "revealed", text: "" })
        // }

        return (
            (<div className={type} onClick={this.handleClick}>
            {text}
        </div>)
        )

    }
}