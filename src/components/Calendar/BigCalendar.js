import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
// import ReactModal from 'react-modal';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import '../../css/datepicker.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';
import DailyModal from './DailyModal';

const moment = extendMoment(Moment);
const MONTHS = ['1','2','3','4','5','6','7','8','9','10','11','12']

const BigCalendar = (props) => {

  const [selectedDay, setSetlectedDay] = useState('');
  const handleDayClick = (day, { selected, disabled }) => {
    if(disabled){return;}
    setSetlectedDay(day.toLocaleDateString("ja-JP"))
    setModalOpen(true);
  };

  // array of moment objects
  const momentList = props.content.events.map(e=>e.fdate);
  // array of formatted dates
  const dateList = momentList.map(e=>e.format("YYYY-MM-DD"));

  const dateFrom = moment.min(momentList);
  const dateTo = moment.max(momentList);
  // moment-range object
  const range = moment.range(dateFrom.toDate(), dateTo.toDate());
  // get days to be disabled 
  const noEventDays = Array.from(range.by('day')).filter(x=>!dateList.includes(x.format("YYYY-MM-DD"))).map(e=>e.toDate());
  // https://momentjs.com/docs/#/displaying/as-javascript-date/
  const disabledDays = { 
    before: dateFrom.toDate(), 
    after: dateTo.toDate(), 
  }

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{"height":"20rem",'width':'100%'}} >
      <div style={{height:'100%' ,margin:'5em auto 5em'}} className='bigcontainer'>
        <DayPicker
          localeUtils={MomentLocaleUtils}
          locale="ja"
          months = { MONTHS }
          disabledDays={[...noEventDays, disabledDays]}
          onDayClick={ handleDayClick }
        />
      </div>

      <div>{ selectedDay }</div>
      <div>{ isModalOpen }</div>
      <button onClick={()=>{setModalOpen(!isModalOpen)}}>modal</button>

      <DailyModal
        isModalOpen={ isModalOpen }
        setModalOpen={ setModalOpen }
        selectedDay={ selectedDay }
      />

    </div>
  );
}

export default BigCalendar