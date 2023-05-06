import React from "react";
import PropTypes from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faClock);


const styleIn = {
	general: { 
			backgroundColor: "black",
			color: "white",
			display: "flex",
			justifyContent: "center"
		},

	element: {
		backgroundColor: "rgb(20, 20, 20)",
		borderLeft: "1px solid white", 
		borderRight: "1px solid white",
		borderRadius: "10px",
		padding: "10px",
		margin: "20px",
		fontSize: "50px"
		}
}

function SimpleCounter(props){
    return(
        <main className = "container-flex">
			<div style = {styleIn.general}>
				<div style = {styleIn.element}>
                <FontAwesomeIcon icon={faClock} size="1x" />
				</div>
				<div style = {styleIn.element}>{props.numberSix}</div>
				<div style = {styleIn.element}>{props.numberFive}</div>
				<div style = {styleIn.element}>{props.numberFour}</div>
				<div style = {styleIn.element}>{props.numberThree}</div>
				<div style = {styleIn.element}>{props.numberTwo}</div>
				<div style = {styleIn.element}>{props.numberOne}</div>
			</div>
		</main>
    );
}

SimpleCounter.propTypes = {
	style : PropTypes.string,
	numberOne : PropTypes.number,
	numberTwo : PropTypes.number,	
	numberThree : PropTypes.number,
	numberFour : PropTypes.number,
	numberFive : PropTypes.number,
	numberSix : PropTypes.number
}

export default SimpleCounter;