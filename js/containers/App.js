import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ClockActions from '../actions/clock'
import Clock from '../components/Clock'
import { zeroPadding } from '../utils/strings'


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    syncDate: PropTypes.func.isRequired,
    time: PropTypes.shape({
      hour: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired
    })
  };

  componentDidMount() {
    this.timer = setInterval(this.props.syncDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let { hour, minutes, seconds } = this.props.time;
    hour = zeroPadding(hour, 2);
    minutes = zeroPadding(minutes, 2);
    seconds = zeroPadding(seconds, 2);

    const styles = {
      backgroundColor: `#${hour}${minutes}${seconds}`
    };

    return (
      <div className="clock" style={styles}>
        <h1>Redux Clock</h1>
        <Clock {...this.props.time} />
        <p className="inspire">inspired by <a href="http://whatcolourisit.scn9a.org/">What colour is it?</a></p>
      </div>
    );
  }
}


export default connect(
  state => ({time: state.clock}),
  dispatch => bindActionCreators(ClockActions, dispatch)
)(App);
