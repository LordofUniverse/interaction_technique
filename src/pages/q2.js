import './q2.css';
import { useNavigate, useLocation } from "react-router-dom";
import Larrow from '../images/left-arrows.png';
import Rarrow from '../images/arrow-right.png';
import { useState, useEffect } from 'react';

export default function Q2() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { q1time } = state;
	console.log(q1time);

	const [time2, setTime] = useState(new Date());

	const q3 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q3", { state: { q2time: spentTime, q1time: q1time } });
	}

	const q1 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q1", { state: { q2time: spentTime, q1time: q1time } });
	}

	return (
		<div class = "contt">
			<div class = "innercont">
				<div class="cont1">
					<div id = "title">
						Question 2
					</div>
					<div id = "question">
						The orange cap in the IPL is awarded to the player with the
					</div>
					<div id = "Answer">
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">Most wickets taken</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">Highest run scorers</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">Most sixes hit</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">Most catches taken</label>
						</div>
					</div>
				</div>
				<div class="cont2">
					<button type="button" class="btn btn-primary Q" onClick={q3}>Save & Next</button>
					<img onClick={q1} id = "arrl" src={Larrow} />
					<img onClick={q3} id = "arrr" src={Rarrow} />
				</div>
			</div>
		</div>
	)
}