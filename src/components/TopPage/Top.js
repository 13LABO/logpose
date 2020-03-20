import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import AttensionEventList from './components/AttensionEventList';
import NewInfoList from './components/NewInfoList';
// import Information from './components/Information';
import Calendar from '../Calendar/Calendar';
import styled from "styled-components";
import ReactGA from 'react-ga';

class Top extends Component {
	state = {  }
	componentDidMount(){
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	}
  render() { 
    return (
      <div>
        <TopPageContainer>
          <div className="parallax-wrapper">
            {/* <Information /> 新型コロナですよーとか */}
            <Heading /> 
          </div>
          <div className="regular-wrapper" id="regular-wrapper">
            <div className="container">
							{ this.props.content.events.length ? (
								<Calendar content={this.props.content}/>
							):(<div className='center-align'>
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
								</div>
							)}
              <TagList setTag={ this.props.setTag }/>
              <AttensionEventList />
							{ this.props.content.news.length ? (
              <NewInfoList content={this.props.content.news}/>
							):(
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
							)}
            </div>
          </div>
        </TopPageContainer>   
      </div>
    );
  }
}

const TopPageContainer = styled.div`
  width: 100%;  
  margin:0;
  padding:0;
`;

export default Top;
