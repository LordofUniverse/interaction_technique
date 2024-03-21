import './q5.css';
import { useNavigate, useLocation } from "react-router-dom";
import CSK from '../images/CSK.png';
import MI from '../images/MI.png';
import KKR from '../images/KKR.png';
import RCB from '../images/RCB.png';
import Larrow from '../images/left-arrows.png';
import Rarrow from '../images/arrow-right.png';
import { useState, useEffect } from 'react';

export default function Q5() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { q4time, q3time, q2time, q1time } = state;

	const [time2, setTime] = useState(new Date());

	const q4 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q4", { state: { q5time: spentTime, q4time: q4time, q3time: q3time, q2time: q2time, q1time: q1time } });
	}

	const end = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/End", { state: { q5time: spentTime, q4time: q4time, q3time: q3time, q2time: q2time, q1time: q1time } });
	}

	return (
		<div class = "contt">
			<div class = "innercont">
				<div class="cont1">
					<div id = "title">
						Question 5
					</div>
					<div id = "question">
						What is the format of an IPL match?
					</div>
					<div id = "Answer">
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">50 overs per side</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">40 overs per side</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">20 overs per side</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">10 overs per side</label>
						</div>
					</div>
				</div>
				<div class="cont2">
					<button type="button" class="btn btn-danger Q" onClick={end}>Submit</button>
					<img onClick={q4} id = "arrl" src={Larrow} />
					<img id = "arrr" src={Rarrow} />
				</div>
			</div>
		</div>
	)
}