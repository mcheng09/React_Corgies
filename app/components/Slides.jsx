var React = require('react');

var Slides = React.createClass({
  render: function() {
    return (
      <div>
        <div className="slides">
          <img data-interchange="[img/corgie1.jpg, small], [img/corgie2.jpg, medium], [img/corgie3.jpg, large]" />
        </div>
      </div>
    )
  }
});

module.exports = Slides;
