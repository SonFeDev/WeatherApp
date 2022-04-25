import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import weatherApi from './service/weatherApi';
import cityApi from './service/cityAPI';
import './App.scss';
import Hour from './view/content/Hour';
import Today from './view/content/Today';
import Week from './view/content/Week';
import { useEffect, useState } from 'react';
import Search from './view/content/Search';
import OutsideClickHandler from 'react-outside-click-handler';
import WeatherDetail from './view/content/WeatherDetail';


function App() {
  const [coords, setCoords] = useState({});
  const [weather, setWeather] = useState({});
  const { lat, lon } = coords;
  const [searchResult, setSearchResult] = useState();
  const [listCity, setListCity] = useState([])
  const [timer, setTimer] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [location, setLocation] = useState();



  useEffect(() => {

    getWeather(location);

  }, [])


  const getWeather = async (location) => {
    if (!location) {
      location = await weatherApi.getCurrentLocation();
    }
    const weather = await weatherApi.getWeather(location);
    setWeather(weather.data)
    return weather;
  }

  const getCity = async (city) => {
    const cityName = await cityApi.getCity({ city_like: city })
    return cityName
  }
  const handleChange = (e) => {

    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      const city = e.target.value;
      getCity(city)
        .then((res) => {
          setSearchResult(res.data)
          console.log(res.data);
        })

    }, 500);
    setTimer(newTimer);


  }


  return (
    <div className="app">
      <div className="side-nav">
        <div className="title">
          <div>Wea<span>ther</span></div>
        </div>
        <div className="side-nav__devider"></div>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => {
              return !isActive ? 'side-menu' : 'side-menu side-menu--active'
            }}>
              <div className="side-menu__title">Today</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/week" className={({ isActive }) => {
              return !isActive ? 'side-menu' : 'side-menu side-menu--active'
            }}>
              <div className="side-menu__title">Week</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hour" className={({ isActive }) => {
              return !isActive ? 'side-menu' : 'side-menu side-menu--active'
            }}>
              <div className="side-menu__title">Hour</div>
            </NavLink>
          </li>
          <WeatherDetail weatherData={weather} />

        </ul>

      </div>
      <div className="content">
        <div className="top-bar">
          <div className="top-bar__right">

            <OutsideClickHandler onOutsideClick={() => {
              setShowSearch(false)
            }}>
              <div className="search">
                <input type="text" className={`search__input input placeholder-theme-13 `}
                  placeholder="Search..."
                  autoComplete='off'

                  name="search"
                  onChange={e => handleChange(e)}
                  onFocus={() => setShowSearch(true)}
                />
              </div>
              <Search showSearch={showSearch} searchResult={searchResult} getWeather={getWeather} />
            </OutsideClickHandler>

          </div>
        </div>


        <div className="content-main">



          <Routes>

            <Route path='/' element={<Today weatherData={weather} />} />
            <Route path='/week' element={<Week weatherData={weather} />} />

            <Route path='/hour' element={<Hour />} />


          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
// export { searchResult }
