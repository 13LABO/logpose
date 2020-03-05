import React, { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

  const [ index, setIndex ] = useState(0);
  const handleChangeIndex = (index) => {
    setIndex(index);
  }
  return (
    <Container>
      <TopBarWrapper>
        <TopBarTextContainer>
          {topBarText}
        </TopBarTextContainer>
      </TopBarWrapper>
      
      <SwipeableViewsContainer>
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} style={styles.root} slideStyle={styles.slideContainer}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </AutoPlaySwipeableViews>
        <PaginationWrapper>
          <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />
        </PaginationWrapper>
      </SwipeableViewsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 15rem;
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

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
