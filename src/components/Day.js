import React from 'react'
import moment from "moment";
export default function Day({dayInfo}) {
    return (
        <div className="col-md-4 col-12">
            <div className="card rounded m-3 day-card">
                <div className="card-header">
                    <p className="mb-0">{moment(dayInfo.dt*1000).format('dddd')}</p>
                    <p className="text-secondary lead">{dayInfo.temp.day}°</p>
                    <img src={`http://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`} alt="weather icon" className="w-icon" />
                </div>
                <div className="card-body">
                    <ul className="list-group mb-3">
                        <li className="list-group-item list-group-item-info lead">Cloudiness {dayInfo.clouds} %</li>
                        <li className="list-group-item">Wind speed {dayInfo.wind_speed} M/s</li>
                        <li className="list-group-item">Sunrise: {new Date(dayInfo.sunrise * 1000).toLocaleTimeString('en-IN')}</li>
                        <li className="list-group-item">Sunset: {new Date(dayInfo.sunset * 1000).toLocaleTimeString('en-IN')}</li>
                    </ul>

                    <ul className="list-group mb-3">
                        <li className="list-group-item list-group-item-info lead">Temperature</li>
                        <li className="list-group-item">Morning {dayInfo.temp.morn}°</li>
                        <li className="list-group-item">Evening {dayInfo.temp.eve}°</li>
                        <li className="list-group-item">Night {dayInfo.temp.night}°</li>
                    </ul>


                    <ul className="list-group mb-3">
                        <li className="list-group-item list-group-item-info lead">Feel</li>
                        <li className="list-group-item">Morning {dayInfo.feels_like.morn}°</li>
                        <li className="list-group-item">Evening {dayInfo.feels_like.eve}°</li>
                        <li className="list-group-item">Night {dayInfo.feels_like.night}°</li>
                    </ul>

                </div>

                
            </div>
        </div>
    )
}
