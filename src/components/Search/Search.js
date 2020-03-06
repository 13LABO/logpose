import React, { Component } from 'react';



class Search extends Component {
  state = { text: "" }
  componentDidMount(){
    this.setState({
      text: this.props.content.tag
    })
    this.nameInput.focus();
  }
  render() { 
    return ( 
    <div style={{"marginTop":"5em"}} className="container">
      <input
        type="text"
        autofocus="true"
        ref={(input) => { this.nameInput = input; }}  
        placeholder="検索"
        id="searchinput"
        value={this.state.text}
        style={{width:"80%",margin:"1em 0.5em",padding:"0.5em 1em",borderRadius:"4px",border:"2px solid #ddd",display:"inlineBlock"}}
        onChange={(e)=>{this.setState({text:e.target.value})}}
      />      
    </div>
     );
  }
}
 
export default Search;
