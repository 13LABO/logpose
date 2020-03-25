import React, { Component } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import * as contentful from 'contentful';
import ApiKey from '../../../constants/contentful';
import ReactGA from 'react-ga';
import HeadingBar from './HeadingBar'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
		padding: '5px 15vw',
  },
  slideContainer: {
		padding: '5px',
		overflowY:'hidden',
  },
};

export default class Recommends extends Component{
	client = contentful.createClient(ApiKey);
	state = { index:0, recommends:{} }

	componentDidMount() {
		this.client.getEntries({
			'content_type': 'logposeRecommend',
			order: 'fields.content_order',
		}).then((res)=>{
			this.setState({recommends:res.items})
			// console.log(this.state)
		}).catch((err)=>{
			console.log(err)
		})
	}

  handleChangeIndex = (index) => {
    this.setState({index:index})
	}

	render(){
		const recommends = this.state.recommends.length ? (
			this.state.recommends.map((e, i)=>{
				let url = `https://${e.fields.image.fields.file.url}`
				return (
					<div key={i} style={{height:'20vh',overflowY:'hidden',overflowX:"hidden"}} onClick={()=>{ReactGA.event({category:'logpose_recommend', action:e.fields.image.fields.title})}}>
						<a href={e.fields.image.fields.description} target='_blank' rel="noopener noreferrer">
							<img src={url}  alt={e.fields.image.fields.title} title={e.fields.title} style={{objectFit:'contain', width:'100%', height:'100%', filter:'drop-shadow(1px 1px 1px rgba(0,0,0,.5)) drop-shadow(1px 1px 5px rgba(0,0,0,.5))'}} />
						</a>
					</div>
				)
			})
		):(
			<div className="center">
				<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>
		)


		return (
			<div>
				<HeadingBar title="おすすめ" name="heart"/>
				<div style={{marginTop:"1em"}}>
					<AutoPlaySwipeableViews
						index={this.state.index}
						onChangeIndex={this.handleChangeIndex}
						style={styles.root}
						slideStyle={styles.slideContainer}
						// autoplay={false} // for dev
						enableMouseEvents={true}
					>
						{ recommends }
					</AutoPlaySwipeableViews>
					<PaginationWrapper className="valign-wrapper">
						<Pagination
							dots={ this.state.recommends.length ? this.state.recommends.length : 0 }
							index={ this.state.index }
							onChangeIndex={ this.handleChangeIndex }
						/>
					</PaginationWrapper>
				</div>
			</div>
		);
	}
}

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
	justify-content: center;
	marginTop: 0.5em;
	height:4em;
`;