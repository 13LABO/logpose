import React ,{ Component }from 'react';
import MyCard from './Card'


class Home extends Component {
  render() { 
    const events = this.props.content.events;
    let postList = ""
    //console.log(events)
    if (events==="error"){
      postList = <div>エラーにより取得できませんでした。</div>
    }else{
      postList = events.length ? (
        events.map(post => {
          return(
              <MyCard key={ post.pk } content={ post } />
          )
        })
      ) : ('')
    }


    return ( 
      <div>
				<div className="container">
					{ postList }
				</div>
			</div>
    );
  }
}

export default Home;
