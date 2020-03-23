import React, { Component } from 'react';
import styled from 'styled-components';
import NewsCard from "../../NewsCard";
import { Link } from 'react-router-dom';
import HeadingBar from './HeadingBar';

class NewInfoList extends Component{
  render(){
    return (
      <div>
        <HeadingBar title="新着情報" name="bolt"/>
      <ListContainer>
        {
          this.props.content.map((item) => ( 
            <li key={item.sys.id} style={{fontSize:"12px"}}>
							<NewsCard
								publishDate={item.fields.publishDate}
                newsTitle={item.fields.title}
                newsBody={item.fields.body}
							/>
						</li>
					))
				}
      </ListContainer>
      <Link to="/news">
        <Button>全てのお知らせを見る</Button>
      </Link>
      </div>
    );  
  }
}


const Button = styled.div`
  width:90%;
  background-color:#aaa;
  margin:2em auto;
  height:30px;
  line-height:30px;
  text-align:center;
  border-radius:5px;
  color:white;
  /*margin-top: 1em;*/
  cursor: pointer;
`;
const ListContainer = styled.div`
  list-style:none;
`;


export default NewInfoList;
