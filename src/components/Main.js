require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/App.scss');
var React = require('react');
var MadlibForm = require('./MadlibForm');
var SubmittedMadlib = require('./SubmittedMadlib');

var MADLIB_TEXT = require('../madlibs/bill-of-rights');

var AppComponent = React.createClass({
  render: function() {
    var content = (
      this.state.submittedValue
      ? (
          <SubmittedMadlib
            reset={this.reset}
            text={this.props.text}
            value={this.state.submittedValue}
          />
        )
      : (
          <MadlibForm
            text={this.props.text}
            onSubmit={
              value => this.setState({submittedValue: value})
            }
          />
        )
    );


    return (
      <div className="wrapper">
        <div className="page-two">
          {content}
        </div>
        <div className={ this.state.fadeOut ? 'home-screen fade-out' : 'home-screen' } onClick={this.fadeOut}>
          <div className="intro-text">
            <h1>FLOCABULARY MADLIB</h1>
            <h2>Fill out the form to create your madlib</h2>
            <h2>(click screen to start)</h2>
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      submittedValue: null,
      fadeOut: false
    };
  },
  getDefaultProps: function() {
    return {
      text: MADLIB_TEXT
    };
  },
  reset: function() {
    this.setState(this.getInitialState());
  },
  fadeOut: function() {
    this.setState({
      fadeOut: !this.state.fadeOut
    });
  }
});

module.exports = AppComponent;
