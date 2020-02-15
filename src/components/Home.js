import React ,{ Component }from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    posts:[]
  }
  componentDidMount() {
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
      <div className="post card">
        <div className="card content">
          <span className="card title"></span>
        </div>
      </div>
    ) : (
      <div className="center">no posts</div>
    )
    return ( 
      <div className="container">
        <h4 className="center">Title</h4>
        
      </div>
     );
  }
}
 
export default Home;