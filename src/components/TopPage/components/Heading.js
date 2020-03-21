import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeadingButton from "./HeadingButton";

// const data = "LOGPOSEで\n北海道の就活イベントを\n探そう！";
const data = "札幌就活情報\n共有サイト\nログポ"

export default function Heading() {
	
  return (
    <div style={{margin:"0 auto"}}>
        <HeadingText>
          {data}
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
  font-size: 2rem;
  font-weight: bold;
  padding:1.9em 0;
  line-height: 2em;
  text-shadow: -2px 4px 0 rgba(0,0,0,0.3);
  letter-spacing: 2px;
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
