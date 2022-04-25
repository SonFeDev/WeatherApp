import React from "react";
import OutsideClickHandler from 'react-outside-click-handler';

function Search(props) {
    const { showSearch, searchResult, getWeather } = props



    return (

        <div className={`search-result ${showSearch == false ? '' : 'search-result__show'}`}  >
            <div className="search-result__content">
                <ul className="">
                    {searchResult && searchResult.map((result, index) => {
                        console.log(result.city);
                        return <li key={result.id} className="search-result-child " onClick={() => {
                            getWeather({ lat: result.lat, lon: result.lng })
                        }}>
                            <div className="search-result-content">
                                <div className="flag">
                                    <img alt="flag" className="rounded-full"
                                        src={`https://flagcdn.com/48x36/${result.iso2.toLowerCase()}.png`} />
                                </div>
                                <div className="search-result__country"><strong>{result.city}</strong>, {result.country}</div>

                            </div>
                        </li>
                    })}

                </ul>
            </div>
        </div>


    );
}

export default Search;