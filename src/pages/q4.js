import './q4.css';
import { useNavigate, useLocation } from "react-router-dom";
import Larrow from '../images/left-arrows.png';
import Rarrow from '../images/arrow-right.png';
import { useState, useEffect } from 'react';

export default function Q4() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { q3time, q2time, q1time } = state;

	const [time2, setTime] = useState(new Date());

	let mode = "left";
	let clicked = 0;

	let first = true;

	let l1 = false;
	let l2 = false;
	let l3 = false;
	let l4 = false;

	let r1 = false;
	let r2 = false;
	let r3 = false;
	let r4 = false;

	const firstleftbut = () => {
		if(mode == "left"){
			if (first) {
				let element = document.getElementsByClassName("c1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c4")[0];
				element.classList.replace("btn-primary", "btn-light");
				
				element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-light", "btn-primary");
			} else {
				if (l1) {
					return;
				}
			}
			
			mode = "right";
			clicked = 1;
			l1 = true;
		}
	}
	
	const secondleftbut = () => {
		if(mode == "left"){
			if (first) {
				let element = document.getElementsByClassName("c1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c4")[0];
				element.classList.replace("btn-primary", "btn-light");
	
				element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-light", "btn-primary");
			} else {
				if (l2) {
					return;
				}
			}
	
			mode = "right";
			clicked = 2;
			l2 = true;
		}
	}
	
	const thirdleftbut = () => {
		if(mode == "left"){
			if (first) {
				let element = document.getElementsByClassName("c1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c4")[0];
				element.classList.replace("btn-primary", "btn-light");
	
				element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-light", "btn-primary");
			} else {
				if (l3) {
					return;
				}
			}
			
			mode = "right";
			clicked = 3;
			l3 = true;
		}
	}
	
	const forthleftbut = () => {
		if(mode == "left"){
			if (first) {
				let element = document.getElementsByClassName("c1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("c4")[0];
				element.classList.replace("btn-primary", "btn-light");
	
				element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-light", "btn-primary");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-light", "btn-primary");
			} else {
				if (l4) {
					return;
				}
			}
			
			mode = "right";
			clicked = 4;
			l4 = true;
		}
	}
	
	const firstrightbut = () => {
		if (mode == "right") {
			if (first) {
				
				let element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-primary", "btn-light");
			} else {
				if (r1) {
					return;
				}
			}

			var firstleft1 = document.getElementsByClassName("ro")[0];
			var secondleft1 = document.getElementsByClassName("ro")[1];
			var thirdleft1 = document.getElementsByClassName("ro")[2];
			var forthleft1 = document.getElementsByClassName("ro")[3];
	
			if (clicked == 1) {
				firstleft1.insertAdjacentHTML('beforeend','<connection from="#d11" to="#d21" tail></connection>');
				let element = document.getElementsByClassName("d1")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">1</div>');
			} else if (clicked == 2) {
				secondleft1.insertAdjacentHTML('beforeend','<connection from="#d12" to="#d21" tail></connection>');
				let element = document.getElementsByClassName("d1")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">2</div>');
			} else if (clicked == 3) {
				thirdleft1.insertAdjacentHTML('beforeend','<connection from="#d13" to="#d21" tail></connection>');
				let element = document.getElementsByClassName("d1")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">3</div>');
			} else if (clicked == 4) {
				forthleft1.insertAdjacentHTML('beforeend','<connection from="#d14" to="#d21" tail></connection>');
				let element = document.getElementsByClassName("d1")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">4</div>');
			} 
	
			mode = "left";
			first = false;
			r1 = true;
		}
	}
	
	const secondrightbut = () => {
		if (mode == "right") {
			if (first) {
				
				let element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-primary", "btn-light");
			} else {
				if (r2) {
					return;
				}
			}

			var firstleft1 = document.getElementsByClassName("ro")[0];
			var secondleft1 = document.getElementsByClassName("ro")[1];
			var thirdleft1 = document.getElementsByClassName("ro")[2];
			var forthleft1 = document.getElementsByClassName("ro")[3];
	
			if (clicked == 1) {
				firstleft1.insertAdjacentHTML('beforeend','<connection from="#d11" to="#d22" tail></connection>');
				let element = document.getElementsByClassName("d2")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">1</div>');
			} else if (clicked == 2) {
				secondleft1.insertAdjacentHTML('beforeend','<connection from="#d12" to="#d22" tail></connection>');
				let element = document.getElementsByClassName("d2")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">2</div>');
			} else if (clicked == 3) {
				thirdleft1.insertAdjacentHTML('beforeend','<connection from="#d13" to="#d22" tail></connection>');
				let element = document.getElementsByClassName("d2")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">3</div>');
			} else if (clicked == 4) {
				forthleft1.insertAdjacentHTML('beforeend','<connection from="#d14" to="#d22" tail></connection>');
				let element = document.getElementsByClassName("d2")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">4</div>');
			}
	
			mode = "left";
			first = false;
			r2 = true;
		}
	}
	
	const thirdrightbut = () => {
		if (mode == "right") {
			if (first) {
				
				let element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-primary", "btn-light");
			} else {
				if (r3) {
					return;
				}
			}

			var firstleft1 = document.getElementsByClassName("ro")[0];
			var secondleft1 = document.getElementsByClassName("ro")[1];
			var thirdleft1 = document.getElementsByClassName("ro")[2];
			var forthleft1 = document.getElementsByClassName("ro")[3];
	
			if (clicked == 1) {
				firstleft1.insertAdjacentHTML('beforeend','<connection from="#d11" to="#d23" tail></connection>');
				let element = document.getElementsByClassName("d3")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">1</div>');
			} else if (clicked == 2) {
				secondleft1.insertAdjacentHTML('beforeend','<connection from="#d12" to="#d23" tail></connection>');
				let element = document.getElementsByClassName("d3")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">2</div>');
			} else if (clicked == 3) {
				thirdleft1.insertAdjacentHTML('beforeend','<connection from="#d13" to="#d23" tail></connection>');
				let element = document.getElementsByClassName("d3")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">3</div>');
			} else if (clicked == 4) {
				forthleft1.insertAdjacentHTML('beforeend','<connection from="#d14" to="#d23" tail></connection>');
				let element = document.getElementsByClassName("d3")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">4</div>');
			}
	
			mode = "left";
			first = false;
			r3 = true;
		}
	}
	
	const forthrightbut = () => {
		if (mode == "right") {
			if (first) {
				
				let element = document.getElementsByClassName("d1")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d2")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d3")[0];
				element.classList.replace("btn-primary", "btn-light");
				element = document.getElementsByClassName("d4")[0];
				element.classList.replace("btn-primary", "btn-light");
			} else {
				if (r4) {
					return;
				}
			}

			var firstleft1 = document.getElementsByClassName("ro")[0];
			var secondleft1 = document.getElementsByClassName("ro")[1];
			var thirdleft1 = document.getElementsByClassName("ro")[2];
			var forthleft1 = document.getElementsByClassName("ro")[3];
	
			if (clicked == 1) {
				firstleft1.insertAdjacentHTML('beforeend','<connection from="#d11" to="#d24" tail></connection>');
				let element = document.getElementsByClassName("d4")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">1</div>');
			} else if (clicked == 2) {
				secondleft1.insertAdjacentHTML('beforeend','<connection from="#d12" to="#d24" tail></connection>');
				let element = document.getElementsByClassName("d4")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">2</div>');
			} else if (clicked == 3) {
				thirdleft1.insertAdjacentHTML('beforeend','<connection from="#d13" to="#d24" tail></connection>');
				let element = document.getElementsByClassName("d4")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">3</div>');
			} else if (clicked == 4) {
				forthleft1.insertAdjacentHTML('beforeend','<connection from="#d14" to="#d24" tail></connection>');
				let element = document.getElementsByClassName("d4")[0];
				element.insertAdjacentHTML('beforeend',' <div class = "numbers">4</div>');
			}
	
			mode = "left";
			first = false;
			r4 = true;
		}
	}

	const q3 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q3", { state: { q4time: spentTime, q3time: q3time, q2time: q2time, q1time: q1time } });
	}

	const q5 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q5", { state: { q4time: spentTime, q3time: q3time, q2time: q2time, q1time: q1time } });
	}

	return (
		<div class = "contt">
			<div class = "innercont">
				<div class="cont1">
					<div id = "title">
						Question 4
					</div>
					<div id = "question">
						Match the following:
					</div>
					<div id = "Answer2">
						<div class ="half">
							<div class = "ro" onClick={firstleftbut}>
								1) 
								<button type="button" class="btn btn-primary c1">Chennai Super Kings</button>
								<div id="d11"></div>
							</div>
							<div class = "ro" onClick={secondleftbut}>
								2) 
								<button type="button" class="btn btn-primary c2">Mumbai Indians</button>
								<div id="d12"></div>
							</div>
							<div class = "ro" onClick={thirdleftbut}>
								3) 
								<button type="button" class="btn btn-primary c3">Kolkata Knight Riders</button>
								<div id="d13"></div>
							</div>
							<div class = "ro" onClick={forthleftbut}>
								4) 
								<button type="button" class="btn btn-primary c4">Royal Challengers Bangalore</button>
								<div id="d14"></div>
							</div>
						</div>
						<div class ="shalf">
							<div class = "ro" onClick={firstrightbut}>
								<div id="d21"></div>
								<button type="button" class="btn btn-light d1">Rohit Sharma</button>
							</div>
							<div class = "ro" onClick={secondrightbut}>
								<div id="d22"></div>
								<button type="button" class="btn btn-light d2">Virat Kholi</button>
							</div>
							<div class = "ro" onClick={thirdrightbut}>
								<div id="d23"></div>
								<button type="button" class="btn btn-light d3">MS Dhoni</button>
							</div>
							<div class = "ro" onClick={forthrightbut}>
								<div id="d24"></div>
								<button type="button" class="btn btn-light d4">Shreyas Iyer</button>
							</div>
						</div>
					</div>
				</div>
				<div class="cont2">
					<button type="button" class="btn btn-primary Q" onClick={q5}>Save & Next</button>
					<img onClick={q3} id = "arrl" src={Larrow} />
					<img onClick={q5} id = "arrr" src={Rarrow} />
				</div>
			</div>
		</div>
	)
}