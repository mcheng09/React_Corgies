var React = require('react');

var Nav = require('Nav');
var Title = require('Title');
var SecondNav = require('SecondNav');

var Main = (props) => {
  return (
    <div>
      <div className="main-background">
        <Nav />
        <div className="columns small-8 small-offset-2 end">
          <Title />
          <SecondNav />
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
