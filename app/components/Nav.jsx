var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="navbar-menu">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Corgies</div>
        </div>

        <div className="top-bar" id="navbar-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <IndexLink to="/">Mainpage</IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/conformation">Conformation</Link>
              </li>
              <li>
                <Link to="/obedience">Obedience</Link>
              </li>
              <li>
                <Link to="/herding">Herding</Link>
              </li>
              <li>
                <Link to="/rally">Rally</Link>
              </li>
              <li>
                <Link to="/agility">Agility</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
