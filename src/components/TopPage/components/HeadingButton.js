import React from "react";
import styled from "styled-components/macro";

export default function Button(props) {

  return (
    <HeadingButtonWrapper>
      <TopIconContainer />
      <TitleContainer>
        {props.title}
      </TitleContainer>
      <SubTitleContainer>
        {props.subtitle}
      </SubTitleContainer>
      <ButtomIconContainer />
    </HeadingButtonWrapper>
  );
}

const HeadingButtonWrapper = styled.div`
  left: 254px;
  width: 88px;
  height: 140px;
  background: #FFFFFF4B 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-size: 13px;
  color: white;
  text-align: center;
`;

const SubTitleContainer = styled.div`
  font-size: 9px;
  color: white;
  text-align: center;
`;

const TopIconContainer = styled.div`
  top: 277px;
  left: 163px;
  width: 50px;
  height: 50px;
  background: transparent radial-gradient(closest-side at 84% 50%, #FF9300 0%, #FF0B0B 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const ButtomIconContainer = styled.div`
  top: 379px;
  left: 288px;
  width: 21px;
  height: 12px;
  transform: matrix(0, -1, 1, 0, 0, 0);
  background: transparent url('img/Chevron.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;
