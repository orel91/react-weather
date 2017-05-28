const axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=60d66b63a2b47b87b254b74f837155c7&units=metric";

// 60d66b63a2b47b87b254b74f837155c7

var getTemp = location => {
    var encodedLocation = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(url)
        .then((res) => {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message);
        })
    ;
};

module.exports = {
    getTemp
};