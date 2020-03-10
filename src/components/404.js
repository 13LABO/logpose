import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';

class NotFound extends Component {
	componentDidMount(){
		ReactGA.set({ page: '/404' });
		ReactGA.pageview('/404');
	}
	render() {
		return ( 
			<div>
      <div className="center" style={{"margin":"3em auto"}}>ページが見つかりませんでした</div>
      <div className="center">
      <Button variant="contained" color="default"　disableElevation href='/'>
        トップに戻る
      </Button>
      </div>
    </div>
		);
	}
}

export default NotFound;