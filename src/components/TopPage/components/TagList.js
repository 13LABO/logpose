import React from 'react';
import styled from 'styled-components';
import TagIcon from "./TagIcon";

const topBarText = "カテゴリータグ";

export default function TagList(props) {

  // どうやって tag 取得するんだろう
  const tags = [
    "合同説明会",
    "セミナー(選考対策)",
    "セミナー(その他)",
    "21卒",
    "22卒",
    "全学年",
    "エンジニア職",
    // "",
    // "",
    // "",
    // "",
    // "",
  ];

  const tagicons = tags.map((tag,i)=>{
    return (
      <TagWrapper key={i}>
        <TagIcon tag={tag} setTag={ props.setTag }/>
      </TagWrapper>
    )
  })

  return (
    <div >
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
      <TagListWrapper>
        { tagicons }
      </TagListWrapper>
    </div> 
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

const TagListWrapper = styled.div`
  /* display: flex; */
  margin-left: 10px;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
`;

const TagWrapper = styled.div`
  margin: 5px;
  display: inline-block;
`;
