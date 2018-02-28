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
      // this is the `jsx` which you can alter to your needs. Edit it just
      // like HTML. use `className='some-class'` instead of
      // `class='some-class'`. Everything has to be
      // contained in one single element in the end, so
      //
      // **ERROR**
      // return (
      //   <div></div>
      //   <p></p>
      // )
      // **GOOD**
      // return (
      //   <div>
      //     <div></div>
      //     <p></p>
      //   </div>
      // )
      <div className="main">
        <h1>FLOCABULARY MADLIB</h1>
        {content}
      </div>
    );
  },

  getInitialState: function() {
    return {
      submittedValue: null
    };
  },
  getDefaultProps: function() {
    return {
      text: MADLIB_TEXT
    };
  },
  reset: function() {
    this.setState(this.getInitialState());
  }
});

module.exports = AppComponent;
