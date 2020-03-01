import React, { Component } from 'react';
import styled from 'styled-components';

export default function TagIcon(props) {

  return (
    <>
      <IconContainer>
        <TextContainer>
          {props.tag}
        </TextContainer>
      </IconContainer>
    </> 
  );
}

const IconContainer = styled.div`
  width: 80px;
  height: 30px;
  background: #C4C4C4 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
`;

const TextContainer = styled.div`
  text-align: center;
  line-height: 28px;
  font: W6 13px/23px Hiragino Kaku Gothic ProN;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
`;
