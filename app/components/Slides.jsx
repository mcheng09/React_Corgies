var React = require('react');

var Slides = React.createClass({
  render: function() {
    return (
      <div>
        <div className="orbit" role="region" aria-label="Event Pictures" data-orbit>
          <ul className="orbit-container">
            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span> &#9664;&#xFE0E;</button>
            <button className="orbit-next"><span className="show-for-sr">Next Slide</span> &#9654;&#xFE0E;</button>
            <li className="is-active orbit-slide">
              <img className="orbit-image" src="/img/corgie1.jpg" alt="Space"/>
              <figcaption className="orbit-caption">Chompers, THe Corgie!!!.</figcaption>
            </li>
            <li className="orbit-slide">
              <img className="orbit-image" src="/img/corgie2.jpg" alt="Space"/>
              <figcaption className="orbit-caption">Chompers, THe Corgie!!!.</figcaption>
            </li>
            <li className="orbit-slide">
              <img className="orbit-image" src="/img/corgie3.jpg" alt="Space"/>
              <figcaption className="orbit-caption">Chompers, THe Corgie!!!.</figcaption>
            </li>
            <li className="orbit-slide">
              <img className="orbit-image" src="/img/corgie4.jpg" alt="Space"/>
              <figcaption className="orbit-caption">Chompers, THe Corgie!!!.</figcaption>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Slides;
