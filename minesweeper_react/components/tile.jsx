// import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
// import Board from "./board";

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {status: ""}
        this.handleClick = this.handleClick.bind(this)
       
        console.log(this.props.tile.bombed)
        this.test = (<div className="tile" onClick={this.handleClick}>
            t
        </div>)
    }



    handleClick() {
        
        let bombCount = this.props.tile.adjacentBombCount() 
        bombCount === 0 ? bombCount = null : bombCount

        if (!this.props.tile.explored) {
            console.log("revealed")
                this.test = (
                    <div className="revealed">{bombCount}</div>
                )
        } else if (this.props.tile.bombed){
            console.log("bombed")
            this.test = (
                <div className="bombed">B</div>
            )
        } else if (this.props.tile.flagged){
            console.log("flagged")
            this.test = (
                <div className="flagged">F</div>
            )
        } 
        console.log(bombCount)
        this.props.update();



        
    }

    render() {
        return(
            <div>{this.test}</div>
            
        )

    }
}