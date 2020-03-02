import React from 'react';
import styled from 'styled-components';
import TagIcon from "./TagIcon";

const topBarText = "カテゴリータグ一覧";

export default function TagList() {

  // どうやって tag 取得するんだろう
  const tags = [
    "わたあめ",
    "タピオカ",
  ];

  return (
    <>
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
      <TagListWrapper>
        <TagWrapper>
          <TagIcon tag={tags[0]}/>
        </TagWrapper>
        <TagWrapper>
          <TagIcon tag={tags[1]}/>
        </TagWrapper>
      </TagListWrapper>
    </> 
  );
}

const TopBarWrapper = styled.div`
  background: #707070;
  width: 375px;
  height: 43px;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;

const TagListWrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

const TagWrapper = styled.div`
  margin: 5px;
`;
