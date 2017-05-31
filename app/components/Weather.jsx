const React = require("react");

const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");
const openWeatherMap = require("openWeatherMap");
const ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
            errorMessage: undefined
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
        .catch(e => {
            this.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
        // this.setState({
        //     location,
        //     temp: 23
        // });
    },
    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temperature={temp} />;
            }
        }

        function renderError () {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onNewLocation={this.newLocationHandler} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;