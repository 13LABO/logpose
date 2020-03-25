import React, { Component } from 'react';
import Heading from './components/Heading';
import TagList from './components/TagList';
import Recommends from './components/Recommends';
import NewInfoList from './components/NewInfoList';
import Calendar from '../Calendar/Calendar';
import HeadingBar from './components/HeadingBar';
import ReactGA from 'react-ga';

class Top extends Component {
	state = {  }
	componentDidMount(){
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	}
  render() { 
    return (
      <>
          <div className="parallax-wrapper">
            <Heading /> 
          </div>
          <div className="regular-wrapper" id="regular-wrapper">
            <div className="container" style={{marginTop:'0.5em'}} >
              <HeadingBar title="イベントカレンダー" name="calendar-alt"/>
							{/* { this.props.content.events.length ? ( */}
								<Calendar content={this.props.content}/>
							{/* ):(<div className='center-align'>
									<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
								</div>
							)} */}
              <TagList setTag={ this.props.setTag }/>
              <Recommends/>
							{ this.props.content.news.length ? (
              <NewInfoList content={this.props.content.news}/>
							):(
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
							)}
            </div>
          </div>
      </>
    );
  }
}


export default Top;
