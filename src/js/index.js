//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faClock} from "@fortawesome/fontawesome-free"

//import your own components
import SecondCounter from "./component/SecondCounter.jsx";



//render your react application
let counter = 0;
Math.floor()
setInterval(()=>{
    const one = Math.floor(counter / 1);
    const two = Math.floor(counter / 10);
    const three = Math.floor(counter / 100);
    const four = Math.floor(counter / 1000);
    const five = Math.floor(counter / 10000);
    const six = Math.floor(counter / 100000);
    counter++;

    ReactDOM.render(
        <SecondCounter
            numberOne = {one % 10}
            numberTwo = {two % 10}
            numberThree = {three % 10}
            numberFour = {four % 10}
            numberFive = {five % 10}
            numberSix = {six % 10} 
        />, document.querySelector("#app"));

}, 1000);

library.add(faClock);
