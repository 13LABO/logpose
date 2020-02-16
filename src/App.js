import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <div className="red darken-4 grey-text text-lighten-5 valign-wrapper" style={{"height":"10em","marginTop":"10em"}}>
          <div style={{"margin":"0 auto"}}>©2020  Logpose</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
