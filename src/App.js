import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/404'
import { BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
        <div className="grey-text valign-wrapper" style={{"height":"10em","marginTop":"10em"}}>
          <div style={{"margin":"0 auto"}}>©2020  Logpose</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
