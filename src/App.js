import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import Top from './components/TopPage/Top';
import News from './components/News/News'
import About from './components/About/About';
import Burger from './components/Nav/Burger';
import Search from './components/Search/Search';
import NotFound from './components/404';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import * as contentful from 'contentful';
import ApiKey from './constants/contentful';
//import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far);

const moment = extendMoment(Moment);

class App extends Component{
  client = contentful.createClient(ApiKey);
  state = {events:[],news:[],tag:[]}

  setTag = tag => {this.setState({ tag:tag });}

  componentDidMount() {
    //get event datas from GAS...
    //https://script.google.com/d/1217VsRFyRFei_trI6ZBq4KIFug9bSenV5cNkxKFrYeUZDF5Drv6z0z1j/edit
    axios.get("https://script.google.com/macros/s/AKfycbxsAv-wRMQTwnclT2UoMDEIr4DQlSBrffZAwqqK-VBUiwjT3dD3/exec")
      .then(res => {
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
        console.log(this.state)
      })
      .catch(res=>{
        this.setState({events: "error"})
      })

      //get news from contentful...
      //https://github.com/contentful/contentful.js#documentation--references
      //https://www.contentful.com/developers/docs/references/content-delivery-api/
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
    return (
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
                  exact path='/home' 
                  render={()=><Home content={this.state}/>}
                />
                <Route 
                  exact path='/about' 
                  render={()=><About content={this.state}/>}
                />
                <Route 
                  exact path='/news' 
                  render={()=><News content={this.state}/>}
                />
                <Route 
                  exact path='/events' 
                  render={()=><Search content={this.state} setTag={this.setTag}/>}
                  //component={Search}
                />
                <Route component={NotFound} />
              </Switch>
              <div className="grey-text valign-wrapper" style={{"height":"10em","marginTop":"10em"}}>
                <div style={{"margin":"0 auto"}}>©2020  Logpose</div>
              </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
