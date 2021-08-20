import React, { useEffect, useState } from "react";
import Day from "./Day";
export default function OtherDays() {
	
	const [lat, setLat] = useState([]);
	const [lon, setLong] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function(position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});

			await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude={hourly,minutely}&appid=${process.env.REACT_APP_API_KEY}`)
			.then(res => res.json())
			.then(result => {
				setData(result)
			});
		}
		fetchData();
	}, [lat,lon])



	
	return (
		<div className="OtherDays">
			<div className="card-body">
				<div className="row">
							
							{(typeof data.daily != 'undefined') ? (
								data.daily.map((day, idx) => (
									<Day dayInfo={day} key={idx}/>
								))
					): (
						<div></div>
					)}
					
				</div>        
			</div>
		</div>
	);
}