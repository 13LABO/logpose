import React from 'react';
import styled from 'styled-components';

export default function TagIcon(props) {

  const handleTagSearch = () => {
    console.log(props.tag)
  }

  return (
    <>
      <IconContainer onClick={ handleTagSearch }>
        <TextContainer>
          {props.tag}
        </TextContainer>
      </IconContainer>
    </> 
  );
}

const IconContainer = styled.span`
  /* width: 80px; */
  padding: 4px 9px;
  height: 30px;
  background: #C4C4C4 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
`;

const TextContainer = styled.span`
  text-align: center;
  line-height: 28px;
  /* font: W6 13px/23px Hiragino Kaku Gothic ProN; */
  /* letter-spacing: 0; */
  color: #FFFFFF;
  opacity: 1;
`;
