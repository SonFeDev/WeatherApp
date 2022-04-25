import React from 'react';
import { FiSun } from 'react-icons/fi';
import { MdVisibility } from 'react-icons/md'
import { WiDayWindy, WiHumidity } from 'react-icons/wi'
import { getTimeFromDt } from '../../service/timestamp.ts';
import { BsThermometerHalf, BsSunrise, BsSunset } from 'react-icons/bs'



function Today({ weatherData }) {
    console.log({ weatherData });
    return (
        <>
            {weatherData.current != undefined ? (<div className="row tab-today">
                <div className="tab-today__item col zoom-in">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-icon">
                                <FiSun />
                            </div>
                            <div className="box-value">
                                {weatherData.current.uvi}
                            </div>
                            <div className="box-desc">
                                UV index
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-today__item col zoom-in">
                    <div className="box ">
                        <div className="box-content">
                            <div className="box-icon">
                                <WiDayWindy />
                            </div>
                            <div className="box-value">
                                {weatherData.current.wind_speed} km/h
                            </div>
                            <div className="box-desc">
                                Wind Status
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-today__item col zoom-in">
                    <div className="box">
                        <div className="box-content">
                            <div className="tab-today-sun">
                                <p>{getTimeFromDt(weatherData.current.sunrise)}</p><div className='box-icon'><BsSunrise /></div>
                            </div>
                            <div className="tab-today-sun">
                                <p>{getTimeFromDt(weatherData.current.sunset)}</p><div className='box-icon'><BsSunset /></div>
                            </div>
                            <div className="box-desc">
                                Sunrise & Sunset
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-today__item col zoom-in">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-icon">
                                <WiHumidity />
                            </div>
                            <div className="box-value">
                                {weatherData.current.humidity}
                            </div>
                            <div className="box-desc">
                                Humidity
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-today__item col zoom-in">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-icon">
                                <MdVisibility />
                            </div>
                            <div className="box-value">
                                {weatherData.current.visibility}
                            </div>
                            <div className="box-desc">
                                Visibility
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-today__item  col zoom-in">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-icon">
                                <BsThermometerHalf />
                            </div>
                            <div className="box-value">
                                {weatherData.current.pressure} hPa
                            </div>
                            <div className="box-desc">
                                Pressure
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (<div></div>)}

        </>
    );
}

export default Today;