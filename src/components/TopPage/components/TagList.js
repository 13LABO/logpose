import React from 'react';
import styled from 'styled-components';
import TagIcon from "./TagIcon";
import HeadingBar from './HeadingBar';

export default function TagList(props) {

  // どうやって tag 取得するんだろう ←今のとこ手打ちですまぬ
  const tags = [
    "合同企業説明会",
    "22卒",
    "エンジニア",
    "セミナー(選考対策)",
    "オフライン",
    "全学年",
    "21卒",
    "面接GD",
    // "エンジニア職",
    // "総合職",
    // "一般職",
    "セミナー(その他)",
    "オンライン",
  ];

  const tagicons = tags.map((tag,i)=>{
    return (
      <div style={{display:'inline-block',margin:'5px'}} key={i}>
        <TagIcon tag={tag} setTag={ props.setTag }/>
      </div>
    )
  })

  return (
    <div>
      <HeadingBar title="タグ" name="tags"/>
      <TagListWrapper>
        { tagicons }
      </TagListWrapper>
    </div> 
  );
}

const TagListWrapper = styled.div`
  overflow-x: hidden;
	margin:0.3em 0;
  margin-left: 1.8em;
`;
