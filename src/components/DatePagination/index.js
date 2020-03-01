import React from 'react'
import PropTypes from 'prop-types'
import Paginator from 'paginator'
import Page from './Page'


import './pagination.css'

export default class DatePagination extends React.Component {
  paginationInfo=null;
  
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    days: PropTypes.array
  };

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    innerClass: 'pagination',
  };

  componentWillUnmount() { this.paginationInfo = null }

  buildPages() {
    const pages = []
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      //activePage,
      totalItemsCount,
      onChange,
      days
    } = this.props

    const activePage = days.indexOf(this.props.selectedDay) + 1

    this.paginationInfo = new Paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage)


    if (this.paginationInfo.next_page === this.paginationInfo.total_pages) {
      this.paginationInfo.has_next_page = false
    }

    for (let i = this.paginationInfo.first_page; i <= this.paginationInfo.last_page; i++) {
      let date = days[i - 1]
      pages.push(
        <Page
          pageNumber={i}
          onClick={onChange}
          isActive={i === activePage}
          date={date}
          key={i}
          setSelectedDay={this.props.setSelectedDay}
        />
      )
    }
    return pages
  }

  render() {
    const pages = this.buildPages()
    return (
      <div className='react-date-pagination'>
        <ul style={{width:'100%'}} className='center-align'>
          { pages }
        </ul>
      </div>
    )
  }
}
