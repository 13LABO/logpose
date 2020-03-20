import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import '../../css/datepicker.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';
import DailyModal from './DailyModal';

const moment = extendMoment(Moment);
const MONTHS = ['1','2','3','4','5','6','7','8','9','10','11','12']

//Calendar( Daypicker DailyModal )

const Calendar = (props) => {
  
  const [selectedDay, setSelectedDay] = useState(''); // 'YYYY/M/D'
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDayClick = (day, { selected, disabled }) => {
    if(disabled){return;}
    setSelectedDay(day.toLocaleDateString("ja-JP"))
    setModalOpen(true);
  };

  const momentList = props.content.events.map(e=>e.fdate); // Date object
  const dateList = momentList.map(e=>e.format("YYYY/M/D")); // string
  const dateFrom = moment.min(momentList).toDate();
  const dateTo = moment.max(momentList).toDate();
  const range = moment.range(dateFrom, dateTo); // moment-range object
  //date objects
  const noEventDays = Array.from(range.by('day')).filter(x=>!dateList.includes(x.format("YYYY/M/D"))).map(e=>e.toDate());
  const disabledDays = { before: dateFrom, after: dateTo }

  return (
    <div style={{"height":"100%",'width':'100%','padding':'1.5em 0'}} className='center-align calendar-wrapper'>
      <div style={{height:'100%'}} className='bigcontainer noselect'>
        <DayPicker // literally a calendar
          localeUtils={MomentLocaleUtils}
          locale="ja"
          months = { MONTHS }
          disabledDays={[...noEventDays, disabledDays]}
          onDayClick={ handleDayClick }
          captionElement = {(props)=>{
            return (
              <div className="DayPicker-Caption">
                {props.date.getFullYear()} / {props.date.getMonth()+1}　<span style={{fontSize:"1rem"}}>のイベント</span>
              </div>
            )}}
        />
      </div>
			<div id='taglists' style={{height:'3em'}}></div>
      <DailyModal // initially hidden
        isModalOpen={ isModalOpen }
        setModalOpen={ setModalOpen }
        selectedDay={ selectedDay } // 'YYYY/M/D'
        dateList={ dateList } // list of 'YYYY/M/D'
        setSelectedDay={ setSelectedDay } // set to 'YYYY/M/D'
        events = { props.content.events }
      />
    </div>
  );
}

export default Calendar