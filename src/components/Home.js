import React ,{ Component }from 'react';
import axios from 'axios';
import MDSpinner from "react-md-spinner";
import MyCard from './Card'




class Home extends Component {
  state = {posts:[]}
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
            <MyCard key={ post.pk } content={ post } />
        )
      })
    ) : (
      <div className="center" style={{"margin":"5em auto"}}>
        {/* loading */}
        <MDSpinner size={50} singleColor={"rgb(209,53,50)"}/>
      </div>
    )

    return ( 
      <div className="container">
        <h4 className="center">Title</h4>
        <p className="grey-text text-darken-3">{ posts.length }件のイベント</p>
        { postList }
      </div>
     );
  }
}
 
export default Home;