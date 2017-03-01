var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage =require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true,
            //clears the data after a search
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
            location: location,
            temp: temp,
            isLoading: false
         });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            //removes location query string after weather has been succesfully searched for
            window.location.hash = '#/';
        }   
    },
    componentWillReceiveProps: function (newProps) {
        //when you search from any component the weather details will update
        var location = newProps.locationq.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            //removes location query string after weather has been succesfully searched for
            window.location.hash = '#/';
        }  
    },  
    render: function () {
        //pull variables off the state, so we can pass down as props
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {

                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;