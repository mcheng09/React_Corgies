var React = require('react');

var Slides = React.createClass({
  render: function() {
    return (
      <div>
        <div className="orbit" role="region" aria-label="Event Pictures" data-orbit>
          <ul className="orbit-container">
            <li className="orbit-slide">
              <img className="orbit-image" src="/img/corgie1.jpg" alt="Space"/>
              <figcaption className="orbit-caption">Chompers, THe Corgie!!!.</figcaption>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Slides;
