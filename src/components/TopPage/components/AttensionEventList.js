import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

const topBarText = "おすすめ";
const styles = {
  root: {
    padding: '0 30px',
  },
  slideContainer: {
    padding: '0 10px',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

export default function AttensionEventList() {

  return (
    <Container>
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
      
      <SwipeableViewsContainer>
        <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </SwipeableViews>
      </SwipeableViewsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 15rem;
  border: solid 1px red;
`;
const SwipeableViewsContainer = styled.div`
  margin: 15px;
`;

const TopBarWrapper = styled.div`
  background: #707070;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;
