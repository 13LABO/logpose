import React, { Component } from 'react';
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
  background: #707070 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  width: 375px;
  height: 43px;
`;

const TopBarTextContainer = styled.div`
  margin-left: 10px;
  font-size: 24px;
  font: W6 19px/33px Hiragino Kaku Gothic ProN;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
`;
