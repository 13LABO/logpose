import React, { Component } from 'react';
import DatePagination from '../DatePagination/index'

class Demo extends Component {
  state = { 
    activePage:2,
   }

  handlePageChange=(pageNumber) => {
    this.setState({
      activePage: pageNumber,
      //date = date[pageNumber]
    })
  }

  render() {
    //console.log(this.state)
    let activePage = this.state.activePage
    //ここで日付の配列を用意する
    let daysArray = [{date:'2018-06-01'}, {date:'2018-06-02'}, {date:'2018-06-03'},{date:'2018-06-04'}, {date: '2018-06-05'}, {date: '2018-06-06'},{date: '2018-06-07'}, {date: '2018-06-08'}, {date: '2018-06-09'}];
    let activeContent = daysArray[activePage-1].date
    console.log(activeContent)
    console.log(this.handlePageChange)
    return ( 
      <div className="center">
          <DatePagination
            activePage={this.state.activePage}
            itemsCountPerPage={1}
            totalItemsCount={daysArray.length}
            days={daysArray}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
          <p>active page is { activePage }</p>
          <p>active content is { activeContent }</p>
      </div>
    );
  }
}
 
export default Demo;
