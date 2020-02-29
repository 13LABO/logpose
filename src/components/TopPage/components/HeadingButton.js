import React from "react";
import styled from "styled-components/macro";

export default function Button(props) {
  return (
    <HeadingButtonWrapper>
      <TitleContainer>
        {props.title}
      </TitleContainer>
      <SubTitleContainer>
        {props.subtitle}
      </SubTitleContainer>
    </HeadingButtonWrapper>
  );
}

const HeadingButtonWrapper = styled.div`
  background-color: rgb(85, 85, 85);
  width: 88px;
  height: 140px;
`;

const TitleContainer = styled.div`
  font-size: 13px;
  color: white;
`;

const SubTitleContainer = styled.div`
  font-size: 9px;
  color: white;
`;
