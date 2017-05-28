const React = require("react");

const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");
const openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    newLocationHandler: function(location){

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(temp => {
            this.setState({
                location,
                temp,
                isLoading: false
            });
        })
        .catch(errorMessage => {
            this.setState({isLoading: false});
            alert(errorMessage);
        });
        // this.setState({
        //     location,
        //     temp: 23
        // });
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temperature={temp} />;
            }
        }

        return(
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onNewLocation={this.newLocationHandler} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;