import React, { Component } from 'react';
import * as contentful from 'contentful';
import ApiKey from '../../constants/contentful';
import NewsCard from "../NewsCard";
// import styled from 'styled-components';
import ReactGA from 'react-ga';


class News extends Component{
  client = contentful.createClient(ApiKey);
  state = {news:[]}
  componentDidMount() {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
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
			<div className='container'>
				<h5 className='aboutHeader' style={{margin:"2em 0.6em"}}>Logposeからのニュース</h5>
				{
					this.state.news.length ? (this.state.news.map((item) => (
								<NewsCard
									key={item.sys.id}
									publishDate={item.fields.publishDate}
									newsTitle={item.fields.title}
									newsBody={item.fields.body}
								/>		
						))) : (
							<div className='center-align'>
								<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
							</div>)
				}
			</div>
    );
  }
}


export default News;