const React = require("react");

var WeatherMessage = ({temperature, location}) => <h3>It is {temperature} in {location}</h3>;

module.exports = WeatherMessage;