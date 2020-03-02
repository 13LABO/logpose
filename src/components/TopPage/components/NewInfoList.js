import React, { Component } from 'react';
import styled from 'styled-components'


const topBarText = "新着情報";
class NewInfoList extends Component{
  render(){
    return (
      <Container>
        <TopBarWrapper>
          <TopBarTextContainer>
            {topBarText}
          </TopBarTextContainer>
        </TopBarWrapper>
      <ListContainer>
        {
          this.props.content.map((item) => (
            <List key={item.sys.id}><PublishDate>{item.fields.publishDate}</PublishDate>
                                  <NewsTitle>{item.fields.title}</NewsTitle>
                                  <NewsBody>{item.fields.body}</NewsBody>
                                  <Next>続きを読む</Next></List>
           ))
        }
      </ListContainer>
      <Button>全てのお知らせを見る</Button>
      </Container>
    );  
  }
}

const TopBarWrapper = styled.div`
  background: #707070;
  width: 100%;
  height: 43px;
`;

const TopBarTextContainer = styled.div`
  margin-left:10px;
  font-size:19px;
  color: #FFFFFF;
  line-height:43px;
`;
const List = styled.li`
  font-size:12px;
  padding 5px;
`;
const PublishDate = styled.span`
  font-weight:700;
  padding-left:5px;
`;
const NewsTitle = styled.span`
  font-weight:700;
  display:block;
  padding-left:10px;
`;
const NewsBody = styled.span`
  color:grey;
  padding-left:10px;
  display:block;
  height:34px;
  overflow:hidden;
`;
const Next = styled.span`
  display:block;
  text-align:right;
  padding:0 5px 5px 0;
  border-bottom:0.3px solid grey;
`;
const Button = styled.div`
  width:90%;
  background-color:silver;
  margin:5px auto;
  height:30px;
  line-height:30px;
  text-align:center;
  border-radius:5px;
  color:white;
`;
const ListContainer = styled.div`
  list-style:none;
`;
const Container = styled.div`
  background-color:white;
  padding:0 0 5px 0;
`;


export default NewInfoList;
