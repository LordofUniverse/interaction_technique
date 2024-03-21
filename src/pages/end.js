import './end.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
var FormData = require('form-data');

export default function End() {
	const { state } = useLocation();
	const { q5time, q4time, q3time, q2time, q1time } = state;
	  
	// const FormState = {
	// 	inputs: {
	// 	q1t: { id: 1143570447, value: q1time },
	// 	q2t: { id: 757393488, value: q2time },
	// 	q3t: { id: 855169385, value: q3time },
	// 	q4t: { id: 1231712964, value: q4time },
	// 	q5t: { id: 120967087, value: q5time }
	// 	}
	// }

	console.log("q1:", Math.round(q1time/10)/100);
	console.log("q2:", Math.round(q2time/10)/100);
	console.log("q3:", Math.round(q3time/10)/100);
	console.log("q4:", Math.round(q4time/10)/100);
	console.log("q5:", Math.round(q5time/10)/100);
	  
	// const doSubmit = async () => {	
	//   	// const { inputs } = FormState;
	// 	const formData = new FormData();
	// 	formData.append("entry.1143570447", q1time);
	// 	formData.append("entry.757393488", q1time);
	// 	formData.append("entry.855169385", q1time);
	// 	formData.append("entry.1231712964", q1time);
	// 	formData.append("entry.120967087", q1time);

	// 	console.log("req");
	
	// 	console.log(formData);
		
	// 	await axios({
	// 		url: "https://docs.google.com/forms/d/e/1FAIpQLScB5nH2eHkhfEzeNRgmB-A3LD73LL6IGXXKX3wLgqYMP-5BLw/formResponse",
	// 		headers: {
	// 			'Access-Control-Allow-Origin': '*',
	// 			// 'Content-Type': 'application/json',
	// 		  },
	// 		method: 'post',
	// 		data: formData,
	// 		responseType: 'json',
	// 		maxRedirects: 0
	// 	})
	// 	.then((response) => {
	// 		console.log('response', response);
	// 	})
	// 	.catch(err => {
	// 		console.log('err', err);
	// 	})

	// 	console.log("req done");
	// }
	
	// useEffect(()=>{
	// 	console.log("hi");
    //     doSubmit();
    // }, [])

	return (
		<div class = "conttt"/>
	)
}