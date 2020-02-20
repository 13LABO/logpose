import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import Top from './components/Top';
import Calendar from './components/Calendar/Calendar'
import About from './components/About/About';
import Burger from './components/Nav/Burger';
import NotFound from './components/404';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component{
  state = {posts:[]}
  componentDidMount() { /* ???? https://script.google.com/macros/s/AKfycbyNuxy8w2STS9iNKSaTwQYYRS9rCHIFZD89cux-4CjuRNtRrwCu/exec*/
    axios.get("https://script.google.com/macros/s/AKfycbxsAv-wRMQTwnclT2UoMDEIr4DQlSBrffZAwqqK-VBUiwjT3dD3/exec")
      .then(res => {
        const datas = res.data.length ? (
          res.data.map(eventData=>{
          eventData["fdate"]=moment(eventData["??"])
          return eventData
        })
        ):(null)
        console.log(datas);
        this.setState({
          posts: datas
        })
      })
      .catch(res=>{
        this.setState({
          posts: null
        })
      })
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Burger />
          <Navbar />
          <Switch>
            <Route 
              exact path='/'
              render={()=><Home content={this.state}/>}
            />
            <Route 
              exact path='/top' 
              render={()=><Top content={this.state}/>}
            />
            <Route 
              exact path='/about' 
              render={()=><About content={this.state}/>}
            />
            <Route 
              exact path='/calendar' 
              render={()=><Calendar content={this.state}/>}
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
