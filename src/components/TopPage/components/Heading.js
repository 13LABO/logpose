import React, { Component } from 'react';

import styled from 'styled-components';

const data = "LOGPOSEで\n北海道の就活イベントを\n探そう";

class Heading extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <HeadingContainer>
          <HeadingText>
            {data}
          </HeadingText>
        </HeadingContainer>
      </div>
    );
  }
}

const HeadingText = styled.div`
  white-space: pre-line;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`

const HeadingContainer = styled.div`
  border: 1px solid #aaa;  /* FIXME 後でとる */
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: black;
`
 
export default Heading;
