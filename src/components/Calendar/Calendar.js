import React, { Component } from 'react';
import Demo from './Daily'
import BigCalendar from './BigCalendar'

class Calendar extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h3>calendar in development</h3>
        <Demo />
        <div className="center">
          <BigCalendar />
        </div>
      </div>
     );
  }
}
 
export default Calendar;