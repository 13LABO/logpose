import React ,{ Component }from 'react';

class About extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="container">
        <h4 className="" style={{"margin":"1em auto"}}>Logpose について</h4>
        <div className="" style={{"marginBottom":"5em"}}>
            <p>札幌就活情報を集めているのだ！</p>
        </div>

        <div >
          <h5 style={{"margin":"1em 0"}}>NEWS</h5>
          <div className="card grey lighten-5" style={{"borderRadius":"1em"}}>
            <div className="card-content">
              <span className="card-title">テスト投稿</span>
              <span className="sub grey-text">2020/2/16</span>
              <p style={{"margin":"1em 0"}}>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
          <div className="card grey lighten-5" style={{"borderRadius":"1em"}}>
            <div className="card-content">
              <span className="card-title">テスト投稿</span>
              <span className="sub grey-text">2020/2/13</span>
              <p style={{"margin":"1em 0"}}>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>

        </div>
      </div>
     );
  }
}
 
export default About;