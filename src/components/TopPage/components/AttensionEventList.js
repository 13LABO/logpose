import React from 'react';
import styled from 'styled-components';

const topBarText = "おすすめ";

export default function AttensionEventList() {

  return (
    <>
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
    </> 
  );
}

const TopBarWrapper = styled.div`
  background: #707070;
  height: 43px;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;
