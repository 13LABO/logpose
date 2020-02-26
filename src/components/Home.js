import React ,{ Component }from 'react';

//import MDSpinner from "react-md-spinner";
import MyCard from './Card'




class Home extends Component {
  
  wow = () => {
    alert('絞り込み機能準備中...');
  }

  render() { 
    const posts = this.props.content.posts;
    let postList = ""
    //console.log(posts)
    if (posts==="error"){
      postList = <div>エラーにより取得できませんでした。</div>
    }else{
      postList = posts.length ? (
        posts.map(post => {
          return(
              <MyCard key={ post.pk } content={ post } />
          )
        })
      ) : (
      <div>
        <div className="center" style={{"margin":"5em auto"}}>
          loading
          {/* <MDSpinner size={40} singleColor={"rgb(205,92,92)"}/> */}
          {/* <p>データが取得できませんでした…</p> */}
        </div>
      </div>
      )
    }


    return ( 
      <div>
      <div className="container">
        <div className="mycontainer">
          <h6 className="" style={{"margin":"2em 0"}}>就活イベントを探そう！</h6>

          <div className="container valign-wrapper"style={{"height":"5em","border":"2px dashed #ddd","borderRadius":"1em","marginBottom":"4em"}}>
            {/* <div className="center-align">検索フォーム</div> */}
            <button onClick={this.wow} style={{"margin":"0 auto"}}>絞り込む</button>
          </div>

          <p className="grey-text text-darken-3">{ posts.length }件のイベント</p>
        </div>
        { postList }
        </div>

      </div>
     );
  }
}
 
export default Home;