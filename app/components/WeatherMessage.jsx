const React = require("react");

var WeatherMessage = ({temperature, location}) => <h3 className="text-center">It is {temperature} in {location}</h3>;

module.exports = WeatherMessage;