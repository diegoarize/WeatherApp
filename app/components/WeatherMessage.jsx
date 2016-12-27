var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;

    if(location.length > 0) {
      return (
        <h3>The Temperature in {location} is {temp}°C</h3>
      );
    } else {
      return (
        <p>Semething went wrong! You need to type a valid city.</p>
      );
    }
  }
});

module.exports = WeatherMessage;
