import React ,{ Component }from 'react';

class About extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="mycontainer bigcontainer">
        <h4 className="" style={{"margin":"1em auto"}}>Logpose について</h4>
        <div className="" style={{"marginBottom":"5em"}}>
            <p>札幌就活情報を集めているのだ！13LABOを称えましょう！↓</p>
            <div style={{"display":"flex"}} className="valign-wrapper">
              <i className="tiny material-icons">link</i>
              <a className="truncate" href="https://docs.google.com/spreadsheets/d/1-ucKi5ArQ2FQIlgraXhxQYo9mm4ULn8f9LZvxH16ZfA/edit" style={{"fontSize":"12px","width":"80%","paddingLeft":"10px"}}>(マスプへのリンク)</a>
              
            </div>
        </div>
      </div>
     );
  }
}
 
export default About;
