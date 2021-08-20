import React, { useEffect, useState } from "react";
import moment from "moment";

export default function TodayCard() {
  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, lon]);
  return (
    <div className="TodayCard ">
      {typeof data.main != "undefined" ? (
        <div className="card-body shadow-lg">
          <div className="row">
              <div className="col-md-9">
                <div className="weather-date-location">
                    <h3>{moment().format("dddd")}</h3>
                    <p className="text-secondary">
                    <span className="weather-date">{moment().format("LL")}</span>
                    <span className="weather-location"> {data.name}</span>
                    </p>
                </div>
                <div className="weather-data d-flex">
                    <div className="mr-auto">
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" className="w-icon" />
                    <h4 className="display-3">
                        {data.main.temp} <span className="symbol">°</span>C
                    </h4>
                    <p className="lead">/ Feel {data.main.feels_like}<span className="symbol">°</span></p>
                    </div>
                </div>
              </div>
              <div className="col-md-3">
              <p className="lead">
                Humidity: {data.main.humidity} <span className="symbol">%</span>
              </p>
              <p className="lead">Cloudiness: {data.clouds.all}<span className="symbol">%</span></p>
              <p className="lead">
                Sunrise:{" "}
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
              </p>
              <p className="lead">
                Sunset:{" "}
                {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
              </p>
              </div>
          </div> 

        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
