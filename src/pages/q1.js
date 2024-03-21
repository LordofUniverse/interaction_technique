import './q1.css';
import { useNavigate } from "react-router-dom";
import CSK from '../images/CSK.png';
import MI from '../images/MI.png';
import KKR from '../images/KKR.png';
import RCB from '../images/RCB.png';
import Larrow from '../images/left-arrows.png';
import Rarrow from '../images/arrow-right.png';
import { useState, useEffect } from 'react';

export default function Q1() {
	const navigate = useNavigate();

	const [time, setTime] = useState(new Date());

	const q2 = () => {
		const endDate = new Date();
		const spentTime = endDate.getTime() - time.getTime();
		navigate("/Q2", { state: { q1time: spentTime } });
	}

	return (
		<div class = "contt">
			<div class = "innercont">
				<div class="cont1">
					<div id = "title">
						Question 1
					</div>
					<div id = "question">
						Which team holds the record for most IPL titles as of 2024?
					</div>
					<div id = "Images">
						<div class = "imgcont">
							<img class="team" src={CSK} />
							<div class = "radio">
								<input type="radio" id="html" name="fav_language" value="HTML" />
								<label for="html">Chennai Super Kings</label>
							</div>
						</div>
						<div class = "imgcont">
							<img class="team" src={MI} />
							<div class = "radio">
								<input type="radio" id="css" name="fav_language" value="CSS" />
								<label for="css">Mumbai Indians</label>
							</div>
						</div>
						<div class = "imgcont">
							<img class="team" src={KKR} />
							<div class = "radio" >
								<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
								<label for="javascript">Kolkata Knight Riders</label>
							</div>
						</div>
						<div class = "imgcont">
							<img class="team" src={RCB} />
							<div class = "radio" >
								<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
								<label for="javascript">Royal Challengers Bangalore</label>
							</div>
						</div>
					</div>
				</div>
				<div class="cont2">
					<button type="button" class="btn btn-primary Q" onClick={q2}>Save & Next</button>
					<img id = "arrl" src={Larrow} />
					<img onClick={q2} id = "arrr" src={Rarrow} />
				</div>
			</div>
		</div>
	)
}