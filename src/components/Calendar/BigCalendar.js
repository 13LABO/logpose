import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import '../../css/datepicker.css';

const moment = extendMoment(Moment);


export default class BigCalendar extends Component {

  render() {
    const momentList = this.props.events.map(e=>e.fdate);
    //console.log(momentList) 
    const dateFrom = moment.min(momentList);
    const dateTo = moment.max(momentList);
    const range = moment.range(dateFrom, dateTo);
    console.log(range)
    //const difference = arr1.filter(x => !arr2.includes(x));
    const availableDays = Array.from(range.by('day'))//.map((e)=>e._i);
    console.log(availableDays)
    const noEventDays = availableDays.filter((x) => {return(!momentList.includes(x))});
    //console.log(noEventDays)
    //moment().toDate();
    //https://momentjs.com/docs/#/displaying/as-javascript-date/
    const disabledDays = { 
      before: dateFrom.toDate(), 
      after: dateTo.toDate(), 
    }
    return (
      <div style={{"height":"30em"}}>
        <DayPicker disabledDays={disabledDays}/>
        <div><button onClick={()=>console.log(this.props.events)}>console.log</button></div>
      </div>
    );
  }
}