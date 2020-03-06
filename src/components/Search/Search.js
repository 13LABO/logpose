import React, { Component } from 'react';
import monkukuiDistance from './algorithm/monkukuiDistance';

class Search extends Component {
  state = { text: "", events:"" }
  componentDidMount(){
    this.setState({
      text: this.props.content.tag,
      events: ""
    })
    let slug = this.props.content.events.map((e)=>{
      let text = ""

      text += e.organizer;
      text += e.genre;
      text += e.genre2;
      text += e.title;
      text += e.target;
      text += e.hokkaidoOrNot;
      //text += e.content; 
      return ([-1,text])
    })
    this.setState({events:slug})
    this.nameInput.focus();
  }

  // TODO 
  // 距離計算する
  culcDistances() {
    var n = this.state.events.length;
    let tmp = this.state.events;
    for (let i = 0; i < n; i++) {
      tmp[i][0] = monkukuiDistance(this.state.text, tmp[i][1]);
      console.log(tmp);
    }
    this.setState({events:tmp});
  }
  // ソートをして，setState する
  render() { 
    
    return ( 
    <div style={{"marginTop":"5em"}} className="container">
    <button onClick={() => this.culcDistances()}>console.log</button>
      <input
        type="text"
        autoFocus={true}
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
