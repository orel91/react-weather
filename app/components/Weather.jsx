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
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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
    },
    componentDidMount: function(){
        // pull off "location" property from the query string
        var location = this.props.location.query.location;

        if(location && location.length > 0){
            this.newLocationHandler(location);
            // remove query string from url
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;

        if(location && location.length > 0){
            this.newLocationHandler(location);
            window.location.hash = "#/";
        }
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewLocation={this.newLocationHandler} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;