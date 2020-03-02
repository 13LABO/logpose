import React from 'react';
import styled from 'styled-components';

// これどうやって取得するんだろう
// FIXME ハードコーディングだめ
const data = "新着情報：新型コロナウイルスのイベントへの影響について";

export default function Information() {
  return (
    <>
      <InformationContainer>
        <InformationText>
          {data}
        </InformationText>
      </InformationContainer>
    </>
  );
}

const InformationText = styled.div`
  white-space: pre-line;
  color: rgb(112, 112, 112);
  font-size: 12px;
  font-weight: bold;
  margin: 3px;
`

const InformationContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`
