import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game.jsx";

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<Game />, document.getElementById('main'))
})