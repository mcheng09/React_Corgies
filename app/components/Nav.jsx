var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <IndexLink to="/">Homepage</IndexLink>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
