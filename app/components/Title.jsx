var React = require('react');

var Title = React.createClass({
  render: function() {
    return (
      <div className="titlepage">
        <h3>Welcome to Norcal Corgies!</h3>
        <p>Established since 1990</p>
      </div>
    )
  }
});

module.exports = Title;
