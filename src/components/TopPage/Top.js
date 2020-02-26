import React, { Component } from 'react';
import Heading from './components/Heading';
import SearchButtons from './components/SearchButtons';
import AttensionEventList from './components/AttensionEventList';
import NewEventList from './components/NewEventList';
import NewsList from './components/NewsList';

class Top extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Heading />
        <SearchButtons />
        <AttensionEventList />
        <NewEventList />
        <NewsList />
      </div>
     );
  }
}
 
export default Top;
