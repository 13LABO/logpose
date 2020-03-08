import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeadingButton from "./HeadingButton";

// const data = "LOGPOSEで\n北海道の就活イベントを\n探そう！";
const data = "就活、\n ソロ活？"

export default function Heading() {
	
  return (
    <>
      <HeadingContainer>
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
      </HeadingContainer>
    </>
  );
}

const HeadingText = styled.div`
  white-space: pre-line;
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding:3em 0;
  line-height: 2em;
  text-shadow: -2px 4px 0 rgba(0,0,0,0.3);
  letter-spacing: 2px;
}
`

const HeadingContainer = styled.div`
  /*border: 1px solid #aaa;   FIXME 後でとる */
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 10px; */
  /* background-color: rgb(0, 0, 0, 0.5); */
`

const HeadingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

const HeadingButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
