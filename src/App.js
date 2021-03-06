import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Navbar from './components/Nav/Navbar';
import { Link } from 'react-router-dom'
// import Home from './components/Home';
import Top from './components/TopPage/Top';
import News from './components/News'
import About from './components/About';
import Burger from './components/Nav/Burger';
import Search from './components/Search/Search';
import ElasticSearch from './components/Search/ElasticSearch';
import Policy from './components/Policy';
import NotFound from './components/404';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import * as contentful from 'contentful';
import ApiKey from './constants/contentful';
//import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import {
  FacebookIcon,
	TwitterIcon,
	FacebookShareButton,
	TwitterShareButton,
} from "react-share";
import ReactGA from 'react-ga';


ReactGA.initialize('UA-159843081-1');
library.add(fab, fas, far);
const moment = extendMoment(Moment);
const myUrl = "https://logpose-13labo.firebaseapp.com/"

class App extends Component{
  client = contentful.createClient(ApiKey);
  state = {events:[],news:[],tag:[]}

  setTag = tag => {this.setState({ tag:tag });}

  componentDidMount() {
    // get event datas from GAS...
		// project at logpose_production_13laboCareer
    // https://script.google.com/d/1fvUktQdTM0oc18K27VO1Dlvsjz48XGzqYoawVVOA8HJcDFjAyhGfh2x4/edit
    axios.get("https://script.google.com/macros/s/AKfycbw6y0i1YWGDHaDkLjCSTm04lK_lsv9eMO5noVNn5ePwrUdNVRY/exec")
      .then(res => {
        // console.log(res);
        moment.locale('ja');
        const datas = res.data.length ? (
          res.data.map(eventData=>{
          eventData["fdate"]=moment(eventData.date).startOf('day') //format date to moment.js
          return eventData
        })
        ):("error")
        this.setState({
          events: datas
        });
        // console.log(this.state)
      })
      .catch(res=>{
        this.setState({events: "error"})
      })

      // get news from contentful...
      // https://github.com/contentful/contentful.js#documentation--references
      // https://www.contentful.com/developers/docs/references/content-delivery-api/
      this.client.getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'logposeNews',
        //1ページ㝂㝟り㝮コンテンツ数
        'limit':3,})
      .then((response) => {
        this.setState({
          news: response.items
        });
      });
	}



  render(){
		const Page = () => {
			return ( this.state.events=="error" ? (
				<BrowserRouter>
					<Navbar />
					<NotFound />
				</BrowserRouter>
			):(
				<BrowserRouter>
					<Burger />
					<Navbar />
					<div className="App">
						<Switch>
							<Route 
								exact path='/'
								render={()=><Top content={this.state} setTag={this.setTag}/>}
							/>
							<Route 
								exact path='/about'
								// component={About}
								render={()=><About/>}
							/>
							<Route 
								exact path='/news' 
								component={News}
							/>
							<Route 
								exact path='/events' 
								render={()=><ElasticSearch content={this.state} setTag={this.setTag}/>}
							/>
							<Route 
								exact path='/policy' 
								component={Policy}
							/>
							<Route component={NotFound} />
						</Switch>
						<div className="grey-text center-align">
							<div style={{"margin":"4em auto 2em", fontSize:"110%"}} className="">
								©2020  Logpose
								<div style={{marginLeft:'1em',display:'inline-block',transform:"translateY(13px)"}}>
									<TwitterShareButton 
										children = { <TwitterIcon size={35} round={true}/> }
										url = { myUrl }
										className = "noselect"
										title = "札幌就活情報共有サイトログポをシェア！"
										hashtags = { ["就活","オンライン就活","札幌就活","キャリア","21卒"] }
										// related = { ["13LABO_cafe"] }
									/>
								</div>
								<div style={{marginLeft:'1em',display:'inline-block',transform:"translateY(13px)"}}>
									<FacebookShareButton
										children = { <FacebookIcon size={35} round={true}/> }
										url = { myUrl }
										className = "noselect"
										quote = "札幌就活情報共有サイトログポをシェア！"
										hashtag = "#就活"
									/>
								</div>
							</div>
								<Link to="/policy" style={{fontSize:"70%"}}> プライバシーポリシー</Link>
							<div style={{height:"3em"}}></div>
						</div>
					</div>
				</BrowserRouter>
			)
		)}

    return <Page />
  }
}

export default App;
