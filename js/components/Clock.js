import React, { Component, PropTypes } from 'react'
import { zeroPadding } from '../utils/strings'

export default class Clock extends Component {
  static propTypes = {
    hour: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
  };

  render() {
    let { hour, minutes, seconds } = this.props;
    hour = zeroPadding(hour, 2);
    minutes = zeroPadding(minutes, 2);
    seconds = zeroPadding(seconds, 2);

    return (
      <div className="clock__container">
        <span className="clock__time">{hour}:{minutes}:{seconds}</span>
        <span className="clock__color">#{hour}{minutes}{seconds}</span>
      </div>
    );
  }
}
