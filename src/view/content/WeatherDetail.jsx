import React from "react";
import { GrLocation } from 'react-icons/gr';
import moment from "moment";
import kelvinToCelsius from "kelvin-to-celsius";

function WeatherDetail({ weatherData }, props) {
    console.log({ weatherData });
    const { showSearch, searchResult, getWeather } = props
    return (
        <>
            {weatherData.current != undefined ? (<li className="sidebar-weather">
                <div className="">
                    <div className="sidebar-weather_content">
                        <div className="weather-side">
                            <div className="weather-gradient"></div>
                            <div className="date-container">
                                <h2 className="date-dayname">{moment().format('dddd')}</h2>
                                <span className="date-day">{moment().format("MMM Do YY")}</span> <GrLocation />
                                {searchResult && searchResult.map((result, index) => {
                                    return <span className="location" key={result.id}> {result.city}, {result.country}</span>
                                })}
                            </div>
                            <div className="weather-container"><img src={'http://openweathermap.org/img/wn/' + weatherData.current.weather[0].icon + '.png'}
                                alt="icon" className="weather-img" />
                                <h1 className="weather-temp">{kelvinToCelsius(weatherData.current.temp)}°C</h1>
                                <h3 className="weather-desc">{weatherData.current.weather[0].description}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-weather_footer"></div>
                </div>
            </li>) : (<div></div>)}
        </>
    );
}

export default WeatherDetail;