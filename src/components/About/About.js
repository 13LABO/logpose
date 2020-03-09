import React ,{ Component }from 'react';
import * as contentful from 'contentful';
import ApiKey from '../../constants/contentful';


class About extends Component {
	client = contentful.createClient(ApiKey);
	state = { about:'' }

	componentDidMount() {
		//get news from contentful...
		//https://github.com/contentful/contentful.js#documentation--references
		//https://www.contentful.com/developers/docs/references/content-delivery-api/
		this.client.getEntries({
			order: 'sys.createdAt',
			'sys.contentType.sys.id': 'logposeAbout',
			})
		.then((response) => {
			this.setState({
				about: response.items
			});
		});
	}


  render() {

		const abouts = this.state.about.length ? (
			this.state.about.map((e,i)=>{
				return (
					<div style={{marginBottom:'4em'}} key={i}>
						<h5 className='aboutHeader'>{ e.fields.title }</h5>
						<p>{ e.fields.body }</p>
					</div>
				)
			})
		):(
			''
		)

    return ( 
      <div className="mycontainer bigcontainer">
        <div className="" style={{"marginBottom":"5em"}}>
            {/* <div style={{"display":"flex"}} className="valign-wrapper">
              <i className="tiny material-icons">link</i>
              <a className="truncate" href="https://docs.google.com/spreadsheets/d/1-ucKi5ArQ2FQIlgraXhxQYo9mm4ULn8f9LZvxH16ZfA/edit" style={{"fontSize":"12px","width":"80%","paddingLeft":"10px"}}>(マスプへのリンク)</a>
              
            </div> */}
						<div style={{marginTop:'3em'}}>
							{ abouts }
						</div>
        </div>
				<button onClick={()=>{console.log(this.props)}}>history</button>
      </div>
    );
  }
}

export default About;
