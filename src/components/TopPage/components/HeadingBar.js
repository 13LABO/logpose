import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeadingBar = (props) =>{
    return(
      <Container>
        <IconContainer>
          <div style={{display:'block',lineHeight:'65px'}} className="center-align">
            <FontAwesomeIcon icon={['fas',props.name]} size="2x" style={{color:"white"}}/>
          </div>
        </IconContainer>
        <TitleContainer className="brown lighten-5">
          <Text>{ props.title }</Text>
        </TitleContainer>
      </Container>
    );
}

const Container = styled.div`
  display:flex;
  position:relative;
  border-radius:4px;
  margin-bottom: 5px;
`;

const IconContainer = styled.div`
  width:65px;
  height:65px;
  background-color:#d32f2f;
  border-radius:50%;
  border:5px solid white;
`;


const TitleContainer = styled.div`
  position:absolute;
  width:90%;
  height:45px;
  z-index:-10;
  left:30px;
  top:10px;
  border-radius: 4px;
`;


const Text = styled.p`
margin:0;
margin-top:8px;
padding-left:45px;
font-size:20px;
font-weight:Bold;
font-family: MyFont-m;
letter-spacing: 1px;
`;


export default HeadingBar;