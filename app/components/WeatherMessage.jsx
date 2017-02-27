var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var message = this.props.message;
        return(
            <div>
                {message}
            </div>
        )
    }
});

module.exports = WeatherMessage;