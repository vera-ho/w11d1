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

    render() {
        let type = "";
        let text = "";
        let bombCount = this.props.tile.adjacentBombCount() ;
        bombCount === 0 ? bombCount = null : bombCount;
      
        if(this.props.tile.flagged) {
            type = "flagged";
            text = "F";
        } else if (!this.props.tile.explored) {
            type = "tile";
            text = "";
        } else 
        if (this.props.tile.explored && !this.props.tile.bombed) {
            type = "revealed";
            text = bombCount;
        } else if (this.props.tile.bombed){
            type = "bombed";
            text = "B";
        } else {
            type = "revealed";
            text = "";
        }

        return (
            <div className={type} onClick={this.handleClick}>
                {text}
            </div>
        )

    }
}