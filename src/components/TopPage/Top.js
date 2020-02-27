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
  border: 1px solid #aaa;
  width: 375px;  /* スマホの横幅ってどんなもんだろう？ px で設定する必要あるか？ */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: red; /* this is just test */
`;
 
export default Top;
