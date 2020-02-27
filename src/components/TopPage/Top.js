import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import EventCalendar from './components/EventCalendar';
import AttensionEventList from './components/AttensionEventList';
import NewEventList from './components/NewEventList';

import styled from "styled-components";

class Top extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <TopPageContainer>
          <Heading />
          <AttensionEventList />
          <EventCalendar />
          <TagList />
          <NewEventList />
        </TopPageContainer>
      </div>
     );
  }
}

const TopPageContainer = styled.div`
  color: red; /* this is just test */
`;
 
export default Top;
