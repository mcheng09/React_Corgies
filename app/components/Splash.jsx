var React = require('react');
var Slides = require('Slides');

var Splash = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Splash Component</h3>
        <Slides />
      </div>
    )
  }
});

module.exports = Splash;
