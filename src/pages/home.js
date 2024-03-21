import './home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const q1 = () => {
		navigate("/Q1");
	}

	return (
		<div class="cont">
			<button type="button" onClick={q1} class="btn btn-primary pos">Start Now</button>
		</div>
	)
}