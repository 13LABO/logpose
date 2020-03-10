import React, { Component } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import * as contentful from 'contentful';
import ApiKey from '../../../constants/contentful';
import ReactGA from 'react-ga';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const topBarText = "おすすめ";
const styles = {
  root: {
		padding: '0 30px',
  },
  slideContainer: {
		padding: '0 10px',
		overflowY:'hidden',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

export default class AttensionEventList extends Component{
	client = contentful.createClient(ApiKey);
	state = { index:0, recommends:{} }

	componentDidMount() {
		this.client.getAssets()
		.then((response) => {
			this.setState({recommends:response.items})
			console.log(response.items)
		})
		.catch(console.error)
	}

  handleChangeIndex = (index) => {
    this.setState({index:index})
	}

	render(){

		const recommends = this.state.recommends.length ? (
			this.state.recommends.map((e, i)=>{
				let url = `https://${e.fields.file.url}`
				return (
					<div key={i} style={{height:'20vh', overflowY:'hidden'}} onClick={()=>{ReactGA.outboundLink({label:e.fields.description})}}>
						<a href={e.fields.description} target='_blank' rel="noopener noreferrer">
							<img src={url}  alt={e.fields.title} title={e.fields.title} style={{objectFit:'contain', width:'100%', height:'100%', filter:'drop-shadow(1px 1px 1px rgba(0,0,0,.5)) drop-shadow(1px 1px 5px rgba(0,0,0,.5))'}} />
						</a>
					</div>
				)
			})
		):(
			<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
		)

		return (
			<Container>
				<TopBarWrapper>
					<TopBarTextContainer>
						{topBarText}
					</TopBarTextContainer>
				</TopBarWrapper>
				
				<SwipeableViewsContainer>
					<AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} style={styles.root} slideStyle={styles.slideContainer}>
						{ recommends }
					</AutoPlaySwipeableViews>
					<PaginationWrapper>
						<Pagination dots={this.state.recommends.length ? this.state.recommends.length : 0} index={this.state.index} onChangeIndex={this.handleChangeIndex} />
					</PaginationWrapper>
				</SwipeableViewsContainer>
			</Container>
		);
	}
}

const Container = styled.div`
  /*height: 15rem;*/
`;
const SwipeableViewsContainer = styled.div`
  margin-top:1em;
`;

const TopBarWrapper = styled.div`
  background: #707070;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
