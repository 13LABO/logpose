import React ,{ Component }from 'react';
import axios from 'axios';
import MDSpinner from "react-md-spinner";
import MyCard from './Card'




class Home extends Component {
  state = {posts:[]}
  componentDidMount() { /* ↓にせもの↓ */
    axios.get("https://script.google.com/macros/s/AKfycbyNuxy8w2STS9iNKSaTwQYYRS9rCHIFZD89cux-4CjuRNtRrwCu/exec")
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
        <MDSpinner size={40} singleColor={"rgb(209,53,50)"}/>
      </div>
    </div>
    )
    



    return ( 
      <div className="container">
        <h6 className="" style={{"margin":"2em 0"}}>イベントをさがそう！</h6>

        <div className="container center-align"style={{"height":"5em","border":"2px dashed #ddd","borderRadius":"1em","marginBottom":"2em"}}>
          <div className="center-align">検索フォーム</div>
          <button style={{"marginLeft":"auto"}}>絞り込む</button>
        </div>

        <p className="grey-text text-darken-3">{ posts.length }件のイベント</p>
        { postList }
      </div>
     );
  }
}
 
export default Home;