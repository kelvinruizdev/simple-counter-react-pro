import React, { useEffect, useState } from "react";

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

function SecondCounter(props){

	const [counter, setCounter] = useState(0);

	useEffect(()=>{
		let setIntervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 200)
        
        return () => {
            clearInterval(setIntervalId)
        }

	},[counter])


    return(
        <main className = "container-flex">
			<div style = {styleIn.general}>
				<div style = {styleIn.element}>
                <FontAwesomeIcon icon={faClock} size="1x" />
				</div>
				<div style = {styleIn.element}>{Math.floor(counter / 100000) % 10 }</div>
				<div style = {styleIn.element}>{Math.floor(counter / 10000) % 10 }</div>
				<div style = {styleIn.element}>{Math.floor(counter / 1000) % 10 }</div>
				<div style = {styleIn.element}>{Math.floor(counter / 100) % 10 }</div>
				<div style = {styleIn.element}>{Math.floor(counter / 10) % 10 }</div>
				<div style = {styleIn.element}>{Math.floor(counter / 1) % 10 }</div>
			</div>
		</main>
    );
}

export default SecondCounter;
