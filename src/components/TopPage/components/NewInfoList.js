import React, { Component } from 'react';
import styled from 'styled-components'

class NewInfoList extends Component{
  
  render(){
    return (
      <React.Fragment>
      <ul>
        {
          this.props.content.map((item) => (
            <List key={item.sys.id}><PublishDate>{item.fields.publishDate}</PublishDate>
                                  <NewsTitle>{item.fields.title}</NewsTitle>
                                  <NewsBody>{item.fields.body}</NewsBody>
                                  <Next>続きを読む</Next></List>
           ))
        }
      </ul>
      <Button>全てのお知らせを見る</Button>
      </React.Fragment>
    );  
  }
}
const List = styled.li`
  font-size:12px;
  padding:5px;
`;
const PublishDate = styled.span`
  font-weight:700;
  padding-left:5px;
`;
const NewsTitle = styled.span`
  font-weight:700;
  display:block;
  padding-left:10px;
`;
const NewsBody = styled.span`
  color:grey;
  padding-left:10px;
  display:block;
  height:34px;
  overflow:hidden;
`;
const Next = styled.span`
  display:block;
  text-align:right;
  padding-right:5px;
`;
const Button = styled.div`
  width:90%;
  background-color:silver;
  margin:0 auto;
  height:30px;
  line-height:30px;
  text-align:center;
  border-radius:5px;
  color:white;
`;


export default NewInfoList;
