import React from 'react';

import BigCalendar from './BigCalendar'


const Calendar = (props) => {
  return ( 
      <div>
        <div className="center">
          <BigCalendar content={props.content}/>
        </div>
      </div>
   );
}
 
export default Calendar;