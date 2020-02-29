import React, { Component } from 'react';
import BigCalendar from '../../Calendar/BigCalendar'

import styled from "styled-components";

class EventCalendar extends Component {
  state = {  }
  render() { 
    return (
      <div className="center">
        <BigCalendar />
      </div>
    );
  }
}
 
export default EventCalendar;
