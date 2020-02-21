import React, { Component } from 'react';
import DayPicker from 'react-day-picker';

import '../../css/datepicker.css';

export default class BigCalendar extends Component {
  render() {
    return (
      <div style={{"height":"30em"}}>
        <DayPicker />
      </div>
    );
  }
}