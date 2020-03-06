import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {

  return (
    <HeadingButtonWrapper>
      <TopIconContainer><FontAwesomeIcon icon={props.icon}　size="lg"/></TopIconContainer>
      <TitleContainer>
        {props.title}
      </TitleContainer>
      <SubTitleContainer>
        {props.subtitle}
      </SubTitleContainer>
      
      <BottomIconContainer><FontAwesomeIcon icon={['fas','chevron-down']}　size="lg"/></BottomIconContainer>
    </HeadingButtonWrapper>
  );
}

const HeadingButtonWrapper = styled.div`
  left: 254px;
  width: 88px;
  height: 140px;
  background: #FFFFFF4B 0% 0% no-repeat padding-box;
  border-radius: 10px;
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
  text-align:center;
  line-height:50px;
  color:white;
`;

const BottomIconContainer = styled.div`
  text-align:center;
  padding-top:5px;
  color:white;
`;
