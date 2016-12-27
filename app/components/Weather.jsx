var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 35
    }
  },
  handleSearch: function(location) {
    var self = this;
    openweathermap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    var {location, temp} = this.state;

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
