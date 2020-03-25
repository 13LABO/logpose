import React ,{ Component }from 'react';
import * as contentful from 'contentful';
import ApiKey from '../constants/contentful';
import ReactGA from 'react-ga';
import ReactMarkdown from 'react-markdown';

class About extends Component {
	client = contentful.createClient(ApiKey);
	state = { about:'' }

	componentDidMount() {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
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
						<div>
							<ReactMarkdown source={ e.fields.body } />
						</div>
					</div>
				)
			})
		):(
			<div className="center">
				<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>
		)

    return ( 
      <div className="mycontainer bigcontainer">
        <div className="" style={{"marginBottom":"5em"}}>
						<div style={{marginTop:'3em'}}>
							{ abouts }
						</div>
        </div>
				</div>
    );
  }
}

export default About;
