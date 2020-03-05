import React from 'react';
import styled from 'styled-components';
import TagIcon from "./TagIcon";

const topBarText = "カテゴリータグ一覧";

export default function TagList() {

  // どうやって tag 取得するんだろう
  const tags = [
    "全学年対象",
    "22卒",
    "21卒",
    "札幌ドーム",
    "パークホテル",
    "マイナビ",
    "ジョブウェイ",
    "ジョブカフェ北海道",
    "リクナビ",
    "ジェイ・ブロード",
    "合同企業説明会",
    "自己分析",
    "面接GD",
    "企業研究",
    "インターン",
    "その他",
    // "",
    // "",
    // "",
    // "",
    // "",
  ];

  const tagicons = tags.map((tag,i)=>{
    return (
      <TagWrapper key={i}>
        <TagIcon tag={tag}/>
      </TagWrapper>
    )
  })

  return (
    <>
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
      <TagListWrapper>
        { tagicons }
      </TagListWrapper>
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
