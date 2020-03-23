import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeadingButton from "./HeadingButton";


export default function Heading() {
	
  return (
    <div style={{margin:"0 auto"}}>
        <HeadingText>
					<div className="beforelogpo" >札幌就活情報</div>
					<div className="beforelogpo">共有サイト</div>
					<div className="logpo" style={{fontFamily:'MyFont-b',fontSize:"136%",marginTop:"20px",letterSpacing:"4px"}}>ログポ</div>
        </HeadingText>
        <HeadingButtonWrapper >
					<a href='#taglists'>
						<HeadingButtonContainer style={{cursor:"pointer"}}>
							<HeadingButton 
								title={"カテゴリタグ"}
								subtitle={"からさがす"}
								icon={['fas', 'tags']}
							/>
						</HeadingButtonContainer>
					</a>
          <Link to="/events" >
            <HeadingButtonContainer>
              <HeadingButton 
                title={"細かい条件"}
                subtitle={"でさがす"}
                icon={['fas', 'search']}
              />
            </HeadingButtonContainer>
          </Link>
        </HeadingButtonWrapper>
    </div>
  );
}

const HeadingText = styled.div`
  white-space: pre-line;
  text-align: center;
  color: white;
  font-size: 3rem;
  /* font-weight: bold; */
  padding:2em 0 0.5em;
  line-height: 1.3em;
  /* text-shadow: -2px 4px 0 rgba(0,0,0,0.3); */
  letter-spacing: 3px;
	font-family: MyFont-m;
	
}
`


const HeadingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 290px;
`;

const HeadingButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
