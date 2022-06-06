// import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
// import Board from "./board";

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "tile",
            text: "T"
        }
        this.handleClick = this.handleClick.bind(this)
       
        // console.log(this.props.tile.bombed)
        // this.test = (<div className="tile" onClick={this.handleClick}>
        //     T
        // </div>)
    }



    handleClick() {
        let bombCount = this.props.tile.adjacentBombCount() 
        bombCount === 0 ? bombCount = null : bombCount

        if (!this.props.tile.explored && !this.props.tile.bombed) {
            console.log("revealed")
            this.setState({ status: "revealed", text: bombCount })
            // this.test = (
            //         <div className="revealed">{bombCount}</div>
            //     )
        } else if (this.props.tile.bombed){
            console.log("bombed")
            this.setState({ status: "bombed", text: "B" })
            // this.test = (
            //     <div className="bombed">B</div>
            // )
        } else if (this.props.tile.flagged){
            console.log("flagged")
            this.setState({ status: "flagged", text: "F" })
            // this.test = (
            //     <div className="flagged">F</div>
            // )
        } 
        console.log(bombCount)
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