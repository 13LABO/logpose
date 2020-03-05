import React, { Component } from 'react';
import styled from 'styled-components'
import * as contentful from 'contentful';
import ApiKey from '../../constants/contentful';
import axios from 'axios';


class News extends Component{
  client = contentful.createClient(ApiKey);
  state = {news:[]}
  componentDidMount() {
    axios.get("https://script.google.com/macros/s/AKfycbxsAv-wRMQTwnclT2UoMDEIr4DQlSBrffZAwqqK-VBUiwjT3dD3/exec")
      this.client.getEntries({
        order: '-sys.createdAt',
        //1ページ㝂㝟り㝮コンテンツ数
        })
      .then((response) => {
        this.setState({
          news: response.items
        });
      });
  }
  
  render(){
    return ( 
    <Container>
      {
      this.state.news.map((item) => (
        <List key={item.sys.id}><PublishDate>{item.fields.publishDate}</PublishDate>
                                  <NewsTitle>{item.fields.title}</NewsTitle>
                                  <NewsBody>{item.fields.body}</NewsBody>
                                  </List>
       ))
    }</Container>
    );
  }
}
const Container = styled.div`
  width:90%;
  margin:0 auto;
`;
const List = styled.li`
  list-style:none;
`;
const PublishDate = styled.span`
  font-weight:700;
`;
const NewsTitle = styled.span`
  font-weight:700;
  display:block;
`;
const NewsBody = styled.span`
  color:grey;
  width:80%;
  margin:0 auto;
`;
 
export default News;