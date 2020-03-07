import React, { Component } from 'react';
import monkukuiDistance from './algorithm/monkukuiDistance';

let timer = false;

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
      return ([-1,text,e])
    })
    this.setState({events:slug})
    this.nameInput.focus();
  }

  culcDistances = async () => {
    var n = this.state.events.length;
    let tmp = this.state.events;
    for(let i = 0; i < n; i++) {
      tmp[i][0] = monkukuiDistance(this.state.text, tmp[i][1]);
    }

    // 距離順にソートする（O(n^2) の雑をやる）（バブルソート）
    for(let i = 0; i < n; i++) {
      for(let j = i + 1; j < n; j++) {
        if(tmp[i][0] > tmp[j][0]) {
          let buf = tmp[i];
          tmp[i] = tmp[j];
          tmp[j] = buf;
        }
      }
    }
    console.log(tmp);
    this.setState({events:tmp});
    console.log(tmp);
  }

	timer = () => {
		if (timer !== false)  clearTimeout(timer);
		timer = setTimeout(()=>{
			this.culcDistances()
				.then(this.cards)
		}, 400);
	}


  render() { 
	const events = this.state.events
	console.log()
	const cards =  events.length ? ( events.map((e,i)=>{
		return (
			<div key={i}>
				<div>------</div>
				<div>{ e[2].title }</div>
			</div>
		)
	})
	) : ('no ninjas')

    
    return ( 
    <div style={{"marginTop":"5em"}} className="container">
      <button onClick={() => this.culcDistances()}>console.log</button>
      <button onClick={() => console.clear()}>console.clear</button>
      <input
        type="text"
				onKeyUp = {this.timer}
        autoFocus={true}
        ref={(input) => { this.nameInput = input; }}  
        placeholder="検索"
        id="searchinput"
        value={this.state.text}
        style={{width:"80%",margin:"1em 0.5em",padding:"0.5em 1em",borderRadius:"4px",border:"2px solid #ddd",display:"inlineBlock"}}
        onChange={(e)=>{this.setState({text:e.target.value})}}
      />
			{ cards }
    </div>
    );
  }
}

export default Search;
