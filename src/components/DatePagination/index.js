import React from 'react'
import PropTypes from 'prop-types'
import Paginator from 'paginator'
import Page from './Page'
import cx from 'classnames'

import './pagination.css'

// const ulStyle={
//   minWidth: '696px',
//   listStyle: 'none',
//   paddingTop: '20px'
// }

export default class DatePagination extends React.Component {
  paginationInfo=null;

  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    hideDisabled: PropTypes.bool,
    hideNavigation: PropTypes.bool,
    itemClass: PropTypes.string,
    itemClassPrev: PropTypes.string,
    itemClassNext: PropTypes.string,
    linkClass: PropTypes.string,
    activeClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    linkClassPrev: PropTypes.string,
    linkClassNext: PropTypes.string,
    hideFirstLastPages: PropTypes.bool,
    getPageUrl: PropTypes.func,
    days: PropTypes.array
  };

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: '⟨',
    //firstPageText: '«',
    nextPageText: '⟩',
    //lastPageText: '»',
    innerClass: 'pagination',
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    //getPageUrl: (i) => '#'
  };

  componentWillUnmount() {
    this.paginationInfo = null
  }

  isFirstPageVisible(hasPreviousPage) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props
    if (hideFirstLastPages || (hideDisabled && !hasPreviousPage)) return false
    return true
  }

  isPrevPageVisible(hasPreviousPage) {
    const { hideDisabled, hideNavigation } = this.props
    if (hideNavigation || (hideDisabled && !hasPreviousPage)) return false
    return true
  }

  isNextPageVisible(hasNextPage) {
    const { hideDisabled, hideNavigation } = this.props
    if (hideNavigation || (hideDisabled && !hasNextPage)) return false
    return true
  }

  isLastPageVisible(hasNextPage) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props
    if (hideFirstLastPages || (hideDisabled && !hasNextPage)) return false
    return true
  }

  buildPages() {
    const pages = []
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      prevPageText,
      nextPageText,
      totalItemsCount,
      onChange,
      activeClass,
      itemClass,
      itemClassPrev,
      itemClassNext,
      activeLinkClass,
      linkClass,
      linkClassPrev,
      linkClassNext,
      getPageUrl,
      days
    } = this.props
    console.log(onChange)
    this.paginationInfo = new Paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage)

    /**
    total_pages: total_pages,
    pages: Math.min(last_page - first_page + 1, total_pages),
    current_page: current_page,
    first_page: first_page,
    last_page: last_page,
    previous_page: current_page - 1,
    next_page: current_page + 1,
    has_previous_page: current_page > 1,
    has_next_page: current_page < total_pages, //bool
    total_results: total_results,
    results: Math.min(last_result - first_result + 1, total_results),
    first_result: first_result,
    last_result: last_result,
     */

    if (this.paginationInfo.next_page === this.paginationInfo.total_pages) {
      this.paginationInfo.has_next_page = false
    }

    for (let i = this.paginationInfo.first_page; i <= this.paginationInfo.last_page; i++) {
      let date = days[i - 1]

      pages.push(
        <Page
          isActive={i === activePage}
          key={i}
          //href={getPageUrl(i)}
          pageNumber={i}
          pageText={i + ''}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
          date={date}
        />
      )
    }

    this.isPrevPageVisible(this.paginationInfo.has_previous_page) &&
    pages.unshift(
      <Page
        key={'prev' + this.paginationInfo.previous_page}
        pageNumber={this.paginationInfo.previous_page}
        onClick={onChange}
        pageText={prevPageText}
        isDisabled={!this.paginationInfo.has_previous_page}
        itemClass={cx(itemClass, itemClassPrev)}
        linkClass={cx(linkClass, linkClassPrev)}
        isNavigationPage={true}
      />
    )

    this.isNextPageVisible(this.paginationInfo.has_next_page) &&
    pages.push(
      <Page
        key={'next' + this.paginationInfo.next_page}
        pageNumber={this.paginationInfo.next_page}
        onClick={onChange}
        pageText={nextPageText}
        isDisabled={!this.paginationInfo.has_next_page}
        itemClass={cx(itemClass, itemClassNext)}
        linkClass={cx(linkClass, linkClassNext)}
        isNavigationPage={true}
      />
    )
    return pages
  }

  render() {
    const pages = this.buildPages()
    //console.log(this.state)
    //console.log(this.props)
    return (
      <div className='react-date-pagination'>
        <ul>
          {pages}
        </ul>
      </div>
    )
  }
}
