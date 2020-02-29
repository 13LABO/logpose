import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import EventCalendar from './components/EventCalendar';
import AttensionEventList from './components/AttensionEventList';
import NewInfoList from './components/NewInfoList';

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
          <NewInfoList content={this.props.content.news}/>
        </TopPageContainer>
      </div>
     );
  }
}

const TopPageContainer = styled.div`
  border: 1px solid #aaa;  /* FIXME 後でとる */
  width: 375px;  /* スマホの横幅ってどんなもんだろう？ px で設定する必要あるか？ */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
 
export default Top;
