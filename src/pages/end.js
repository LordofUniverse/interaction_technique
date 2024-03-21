import './end.css';
import { useNavigate, useLocation } from "react-router-dom";

export default function End() {
	const { state } = useLocation();
	const { q5time, q4time, q3time, q2time, q1time } = state;

	console.log("q5:", q5time);
	console.log("q4:", q4time);
	console.log("q3:", q3time);
	console.log("q2:", q2time);
	console.log("q1:", q1time);

	return (
		<div class = "conttt"/>
	)
}