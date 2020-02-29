import React, { Component } from 'react';

class NewInfoList extends Component{
  
  render(){
    return (
      <ul>
        {
          this.props.content.map((item) => (
            <li key={item.sys.id}>{item.fields.title}</li>
           ))
        }
      </ul>
    );  
  }
}


export default NewInfoList;
