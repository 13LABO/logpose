import React, { Component } from 'react';
import * as contentful from 'contentful';
import ApiKey from '../../constants/contentful';
import NewsCard from "../NewsCard";
import styled from 'styled-components'


class News extends Component{
  client = contentful.createClient(ApiKey);
  state = {news:[]}
  componentDidMount() {
    // axios.get("https://script.google.com/macros/s/AKfycbxsAv-wRMQTwnclT2UoMDEIr4DQlSBrffZAwqqK-VBUiwjT3dD3/exec")
      this.client.getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'logposeNews',
        })
      .then((response) => {
          this.setState({
            news: response.items    
          });
      });
  }
  
  render(){
    return ( 
    <React.Fragment>
      <Header>全てのお知らせを表示しています。{this.state.news.length}件</Header>
      {
      this.state.news.map((item) => ( 
        <List key={item.sys.id}><NewsCard publishDate={item.fields.publishDate}
                                        newsTitle={item.fields.title}
                                        newsBody={item.fields.body}/></List>
       ))
    }</React.Fragment>
    );
  }
}
const List = styled.li`
  list-style:none;
  `;
const Header = styled.div`
  text-align:center;
`;
 
export default News;