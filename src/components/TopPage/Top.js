import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import EventCalendar from './components/EventCalendar';
import AttensionEventList from './components/AttensionEventList';
import NewInfoList from './components/NewInfoList';
import Information from './components/Information';
import Calendar from '../Calendar/Calendar';

import styled from "styled-components";

class Top extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <TopPageContainer>
          <Information />
          <Heading />
          <Calendar content={this.props.content}/>
          <TagList />
          <AttensionEventList />
          <NewInfoList content={this.props.content.news}/>
        </TopPageContainer>
      </div>
     );
  }
}

const TopPageContainer = styled.div`
  border: 1px solid #aaa;  /* FIXME 後でとる */
  width: 100%;  
  margin:0;
  padding:0;
`;

 
export default Top;
