// import * as Minesweeper from "../minesweeper";
import React from "react";
import { ReactDOM } from "react";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }

    renderTiles(row, rowIdx) {
        return row.map( (tile, tileIdx) => {
            return <Tile tile={tile} update={this.props.update} key={tileIdx} />
        });
    }

    renderRow() {
        const board = this.props.board.grid;
        board.map( (row, rowIdx) => {
            // this.renderTiles(row);
            return (

                <div key={rowIdx}>{this.renderTiles(row, rowIdx)}</div>
            );
        });
    }

    render(){
        
        return(
            <div>
                {this.renderRow()}
            </div>)
    }
}