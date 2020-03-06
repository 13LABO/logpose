import React, { Component } from 'react';
import * as contentful from 'contentful';
import ApiKey from '../../constants/contentful';
import NewsCard from "../NewsCard";
import styled from 'styled-components'


class News extends Component{
  client = contentful.createClient(ApiKey);
  state = {news:[]}
  componentDidMount() {
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
      <Header>Logposeからのニュース</Header>
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
const Header = styled.h5`
  padding: 1em;
`;
 
export default News;