import React, { Component } from 'react';
import monkukuiDistance from './algorithm/monkukuiDistance';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';

let timer = false;

class Search extends Component {
  state = { text: "", events:"", result:false, isSearching:false }
  componentDidMount(){
		console.log('component mounted')
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
      return ([0,text,e])
		})
		this.setData();
		this.setState({events:slug})
		this.isResult();
		this.nameInput.focus();
		this.timer();
		
		setTimeout(()=>{this.setData()},5000)
		// this.culcDistances().then(this.cards)
	}
	
	setData = () => {
		console.log('set data fired')
		let slug = this.props.content.events.map((e)=>{
      let text = ""
      text += e.organizer;
      text += e.genre;
      text += e.genre2;
      text += e.title;
      text += e.target;
      text += e.hokkaidoOrNot;
      //text += e.content; 
      return ([0,text,e])
    })
		this.setState({events:slug})
	}

  culcDistances = async () => {
		if (this.state.events.length){
			this.setState({isSearching:true})
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
			this.setState({events:tmp});
			// console.log(tmp);
		}else{
			this.setState({result:false, isSearching:true})
			// return 0
		}
	}

	timer = () => {
		if (timer !== false)  clearTimeout(timer);
		timer = setTimeout(()=>{
			this.culcDistances().then(this.isResult)
		}, 400);
	}

	isResult = () => {
		let result = false;
		if (this.state.events.length){
			for (let i=0;i<this.state.events.length;i++){
				if (this.state.events[i][0]!=this.state.text.length){result = true;}
			}
			this.setState({result:result})
			setTimeout(()=>{this.setState({isSearching:false})},500)
		}else{
			this.setState({result:result});
			setTimeout(()=>{this.setState({isSearching:false})},500)
		}
	}


  render() { 
	const events = this.state.events
	const cards = this.state.isSearching ? ( 
		<div className='center-align' style={{overflow:'hidden'}}>
			<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
		</div>
		):(
		this.state.result ? ( events.map((e,i)=>{
			return (
				<div key={i}>
					<div>------</div>
					<div>{ e[2].title }</div>
				</div>
				)
			})
		) : (
			<div>
				<div style={{margin:'2em'}}>検索結果はありませんでした</div>
			</div>
		))
		console.log(cards)

    return ( 
    <div style={{"marginTop":"5em"}} className="container">
      <button onClick={() => console.log(this.state)}>console.log</button>
      <button onClick={() => console.clear()}>console.clear</button>
      <button onClick={() => console.log(this.props.content)}>props</button>
      <input
        type="text"
				onKeyUp = { this.timer }
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
