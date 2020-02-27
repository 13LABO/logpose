import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import EventCalendar from './components/EventCalendar';
import AttensionEventList from './components/AttensionEventList';
import NewEventList from './components/NewEventList';

class Top extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Heading />
        <AttensionEventList />
        <EventCalendar />
        <TagList />
        <NewEventList />
      </div>
     );
  }
}
 
export default Top;
