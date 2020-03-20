import React, { Component } from 'react';
import ReactGA from 'react-ga';
import cat from '../images/servererror_cat-min.png';

class NotFound extends Component {
	componentDidMount(){
		ReactGA.set({ page: '/404' });
		ReactGA.pageview('/404');
	}
	render() {
		return ( 
			<>
      <div className="center" style={{"margin":"2em auto"}}>サーバーエラーが発生しています…</div>
      <div className="catContainer" style={{width:"75%",margin:"0 auto"}}>
				<img alt="" src={cat} className="catContainer" style={{width:"100%",maxHeight:"80vh",objectFit:"cover"}} />
      </div>
    </>
		);
	}
}

export default NotFound;