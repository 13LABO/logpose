import React, { Component } from 'react';
import monkukuiDistance from './algorithm/monkukuiDistance';
import MyCard from '../Card';
import ReactGA from 'react-ga';

let timer = false;

class Search extends Component {
  state = { text: "", events:"", result:false, isSearching:false, count:0 }
  componentDidMount(){
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
    this.setState({
      text: this.props.content.tag,
      events: ""
    })

		this.setData();
		this.isResult();
		this.nameInput.focus();
		this.timer();
		if(this.state.text.length){
			setTimeout(()=>{this.setData()},2000)
		}
	}
	
	setData = () => {
		let slug = this.props.content.events.map((e)=>{
      let text = ""
      text += e.organizer;
      text += e.genre;
      text += e.genre2;
      text += e.title;
      text += e.target;
      text += e.content;
      text += e.place;
      text += e.onlineOrNot;
      return ([0, text, e, false]) // distance, slug, event, isHit
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
				if(tmp[i][0]===0){
					tmp[i][3] = true;
				}else{
					tmp[i][3] = false;
				}
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
		}
	}

	// onekeyup から一定時間経ったよって教えてくれるやつ
	timer = () => {
		if (timer !== false)  clearTimeout(timer);
		timer = setTimeout(()=>{
			this.culcDistances().then(this.isResult)
		}, 400);
	}
  // hit が1件でもあったか
	isResult = () => {
		let result = false;
		let count = 0
		if (this.state.events.length){
			for (let i=0;i<this.state.events.length;i++){
				if (this.state.events[i][0]!=this.state.text.length){result = true;}
				if (this.state.events[i][3]){count++}
			}
			this.setState({result:result,count:count})
			setTimeout(()=>{this.setState({isSearching:false})},500)
		}else{
			this.setState({result:false});
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
					<MyCard content={e[2]} isHit={e[3]} />
				</div>
				)
			})
		) : (
			<div>
				<div style={{margin:'1em 2em',height:'45vh'}}>検索結果はありませんでした...</div>
			</div>
		))

    return ( 
    <div style={{"marginTop":"5em"}} className="container">
			<div className='mycontainer' style={{marginTop:'1.5em'}}>フリーワード検索</div>
      <input
        type="text"
				onKeyUp = { this.timer }
        autoFocus={true}
        ref={(input) => { this.nameInput = input; }}  
        placeholder="検索"
        id="searchinput"
        value={this.state.text}
        style={{width:"80%",margin:"1em 1em",padding:"0.6em 1em",borderRadius:"6px",border:"2px solid #ddd",display:"inlineBlock"}}
        onChange={(e)=>{this.setState({text:e.target.value})}}
      />
			{this.state.result ? (
				<div className='mycontainer' style={{margin:'1.5em 2em 1em'}}>
					<div>
						<span style={{fontSize:'150%',fontWeight:'500',color:'#d32f2f'}}>{this.state.count}</span>
						<span style={{color:'#d32f2f'}}>件</span> がヒット
					</div>
				</div>
			):(
				<div></div>
			)
			}
			{ cards }
    </div>
    );
  }
}

export default Search;
