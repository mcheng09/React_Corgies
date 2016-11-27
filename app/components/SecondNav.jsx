var React = require('react');
var {IndexLink, Link} = require('react-router');

var SecondNav = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar second-nav">
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SecondNav
