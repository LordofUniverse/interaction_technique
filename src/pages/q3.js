import './q3.css';
import { useNavigate, useLocation } from "react-router-dom";
import CSK from '../images/CSK.png';
import MI from '../images/MI.png';
import KKR from '../images/KKR.png';
import RCB from '../images/RCB.png';
import Larrow from '../images/left-arrows.png';
import Rarrow from '../images/arrow-right.png';
import { useState, useEffect } from 'react';

export default function Q3() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { q2time, q1time } = state;

	const [time2, setTime] = useState(new Date());

	const q4 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q4", { state: { q3time: spentTime, q2time: q2time, q1time: q1time } });
	}
	
	const q2 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time2.getTime();
		navigate("/Q2", { state: { q3time: spentTime, q2time: q2time, q1time: q1time } });
	}

	return (
		<div class = "contt">
			<div class = "innercont">
				<div class="cont1">
					<div id = "title">
						Question 3
					</div>
					<div id = "question">
						The first edition of the IPL was held in
					</div>
					<div id = "Answer">
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">2007</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">2008</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">2009</label>
						</div>
						<div class = "row">
							<input class = 'inp' type="radio" id="javascript" name="fav_language" value="JavaScript" />
							<label class = 'lab' for="javascript">2010</label>
						</div>
					</div>
				</div>
				<div class="cont2">
					<button type="button" class="btn btn-primary Q" onClick={q4}>Save & Next</button>
					<img onClick={q2} id = "arrl" src={Larrow} />
					<img onClick={q4} id = "arrr" src={Rarrow} />
				</div>
			</div>
		</div>
	)
}