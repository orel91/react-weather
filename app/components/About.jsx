const React = require("react");

var About = props => (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>
            Weather app is an awesome app that allows you to search the
             weather for a given city.</p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the
                 Javascript framework used.
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I used
                 Open Weather Map to search for weather data by city name.
            </li>
        </ul>
    </div>
);

module.exports = About;