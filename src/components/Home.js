import React ,{ Component }from 'react';
import axios from 'axios';
import MDSpinner from "react-md-spinner";
import MyCard from './Card'




class Home extends Component {
  state = {posts:[]}
  componentDidMount() { /* ↓にせもの↓ https://script.google.com/macros/s/AKfycbyNuxy8w2STS9iNKSaTwQYYRS9rCHIFZD89cux-4CjuRNtRrwCu/exec*/
    axios.get("https://script.google.com/macros/s/AKfycbxsAv-wRMQTwnclT2UoMDEIr4DQlSBrffZAwqqK-VBUiwjT3dD3/exec")
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        })
      })
      .catch(res=>{
        this.setState({
          posts: ""
        })
      })
    }
  
  wow = () => {
    alert('絞り込み機能準備中...');
  }

  render() { 
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
            <MyCard key={ post.pk } content={ post } />
        )
      })
    ) : (
    <div>
      <div className="center" style={{"margin":"5em auto"}}>
        {/* loading */}
        <MDSpinner size={40} singleColor={"rgb(205,92,92)"}/>
      </div>
    </div>
    )
    
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