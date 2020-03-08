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
			<div className='mycontainer'>
				<Header className=''>Logposeからのニュース</Header>
				{
					this.state.news.length ? (this.state.news.map((item) => ( 
							<List key={item.sys.id} className='container'>
								<NewsCard
									publishDate={item.fields.publishDate}
									newsTitle={item.fields.title}
									newsBody={item.fields.body}
								/>
							</List>
						))) : (
							<div className='center-align'>
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
							</div>)
				}
			</div>
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