var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a React Weather app I built using:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Javascript framework.
                </li>
                <li>
                    <a href="https://openweathermap.org">OpenWeatherMap</a> - Used to search for weather data by city.
                </li>
                <li>
                    <a href="https://github.com/fergmac/practice-ReactWeather">GitHub</a> - My React Weather App repo.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;