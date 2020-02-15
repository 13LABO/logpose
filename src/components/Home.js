import React ,{ Component }from 'react';
import axios from 'axios';
import MDSpinner from "react-md-spinner";

class Home extends Component {
  state = {
    posts:[]
  }
  componentDidMount() { /* ↓にせもの↓ */
    axios.get("https://script.google.com/macros/s/AKfycbyNuxy8w2STS9iNKSaTwQYYRS9rCHIFZD89cux-4CjuRNtRrwCu/exec")
    
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        })
      })
    }
  
  render() { 
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="card" style={{"borderRadius":"0.6em"}} key={ post.pk }>
            <div className="card-content">
            <details>
              <summary style={{"userSelect":"none"}}>
              <span className="card-title w4" style={{"fontWeight":"400"}}>{ post.タイトル }</span>
              <div className="" style={{margin:"1em auto","padding":"1em"}}>hello</div>
              </summary>
              <div>
                <table>
                <tbody>
                <tr><td>日程</td><td>{ post.日程 }</td></tr>
                <tr><td>ジャンル</td><td>{ post.ジャンル }</td></tr>
                <tr><td>対象</td><td>{ post.対象 }</td></tr>
                <tr><td>場所</td><td>{ post.実施場所 }</td></tr>
                <tr><td>主催</td><td>{ post.主催 }</td></tr>
                <tr><td></td><td></td></tr>
                <tr><td></td><td></td></tr>
                </tbody>
                </table>
              </div>
              <p>{ post.内容 }</p>
              </details>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        {/* loading */}
        <MDSpinner size={50} singleColor={"rgb(209,53,50)"}/>
      </div>
    )

    return ( 
      <div className="container">
        <h4 className="center">Title</h4>
        { postList }
      </div>
     );
  }
}
 
export default Home;