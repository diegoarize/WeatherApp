var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var self = this;

    this.setState({isLoading: true});

    openweathermap.getTemp(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      self.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
