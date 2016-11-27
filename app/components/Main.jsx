var React = require('react');

var Nav = require('Nav');
var Title = require('Title');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="main-background">
          <Nav />
          <div className="columns small-8 small-offset-2 end">
            <Title />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;
