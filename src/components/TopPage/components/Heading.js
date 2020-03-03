import React, { Component } from 'react';
import styled from 'styled-components';

import HeadingButton from "./HeadingButton";



const data = "LOGPOSEで\n北海道の就活イベントを\n探そう";
const backImg = '../assets/syukatu2.jpeg';

export default function Heading() {
  return (
    <>
      <HeadingContainer>
        <HeadingText>
          {data}
        </HeadingText>
        <HeadingButtonWrapper>
          <HeadingButtonContainer>
            <HeadingButton 
              title={"カテゴリタグ"}
              subtitle={"からさがす"}
            />
          </HeadingButtonContainer>
          <HeadingButtonContainer>
            <HeadingButton 
              title={"カレンダー"}
              subtitle={"からさがす"}
            />
          </HeadingButtonContainer>
          <HeadingButtonContainer>
            <HeadingButton 
              title={"細かい条件"}
              subtitle={"でさがす"}
            />
          </HeadingButtonContainer>
        </HeadingButtonWrapper>
      </HeadingContainer>
    </>
  );
}

const HeadingText = styled.div`
  white-space: pre-line;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`

const HeadingContainer = styled.div`
  border: 1px solid #aaa;  /* FIXME 後でとる */
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: rgb(0, 0, 0);
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
