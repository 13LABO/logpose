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
          <div className="post card" style={{"borderRadius":"0.6em"}} key={ post.pk }>
            <div className="card-content">
              <span className="card-title w4" style={{"fontWeight":"400"}}>{ post.タイトル }</span>
              <div className="right">hello</div>
              <p>{ post.内容 }</p>
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