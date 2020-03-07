import React, { useState, Component } from 'react';
import ReactModal from 'react-modal';
import Paginator from 'paginator'
import '../../css/modal.css';
import moment from 'moment'
import './pagination.css'
import MyCard from '../Card'
// referenced from ./Calendar
// DailyModal( ReactModal( DatePagination( Page ) ) )

const uniq = array =>  [...new Set(array)];


const DailyModal = (props) => {
  const days = uniq(props.dateList); // uniqued array of 'YYYY/M/D'
  const [pageNumber, setPageNumber] = useState(0);
  //console.log(days.indexOf(props.selectedDay)+1)
  const handlePageChange = pageNumber => setPageNumber(pageNumber)
  const handleAfterOpenFunc = () =>{return}

  const eventOnTheDay = props.events.filter((e)=>{
    return (e.fdate.format('YYYY/M/D')===props.selectedDay)}).map((e)=>{
      return(
        <MyCard key={ e.pk } content={ e } />
      )
    })

  return (
    <div className="center center-align">
      <ReactModal
        className= "myModal"
        isOpen = { props.isModalOpen }
        contentLabel = { "modal" }
        ariaHideApp = { false }
        shouldFocusAfterRender = { true }
        shouldCloseOnOverlayClick = { true }
        shouldCloseOnEsc = { true }
        shouldReturnFocusAfterClose = {true}
        parentSelector = { () => document.body }
        //parentSelector={() => document.querySelector('#regular-wrapper')}
        aria = {{ labelledby: "heading", describedby: "full_description" }}
        onAfterOpen = { handleAfterOpenFunc }
        style = { modalStyle }
        closeTimeoutMS = { 150 }
      >
        <div style={{height:"100%"}} className="container">
        <div>
          <div style={{height:'4em'}}>
            <div onClick={()=>{props.setModalOpen(!props.isModalOpen)}}  className='valign-wrapper' style={{width:'30%',cursor:"pointer",marginTop:"5em",}}>
              <i className="material-icons medium" style={{opacity:0.4}}>chevron_left</i>
              <span style={{transform:'translateX(-10px)'}}>戻る</span>
            </div>
          </div>
          

          <div style={{height:"100%"}}>
            <div style={{padding:"1em",fontSize:"150%",marginLeft:"10%"}}>{ moment(props.selectedDay,'YYYY/M/D').format('YYYY年M月') }</div>
            <DatePagination
              totalItemsCount = { days.length }
              onChange={ handlePageChange }
              activePage={ pageNumber } //ここがだいじ
              days={ days } // uniqued array of 'YYYY/M/D'
              setSelectedDay={ props.setSelectedDay } // set to 'YYYY/M/D'
              selectedDay={ props.selectedDay } // 'YYYY/M/D'
            />
            <div  style={{height:"100%"}}> { eventOnTheDay } </div>
          </div>
        </div>
        </div>
      </ReactModal>
    </div>
  );
}




class DatePagination extends Component {
  paginationInfo=null;
  componentWillUnmount() { this.paginationInfo = null }

  buildPages() {
    const pages = []
    const { totalItemsCount, onChange, days } = this.props
    const activePage = days.indexOf(this.props.selectedDay) + 1
    this.paginationInfo = new Paginator(1, 7).build(totalItemsCount, activePage) // Paginator(itemsCountPerPage, pageRangeDisplayed).build(~~)
    for (let i = this.paginationInfo.first_page; i <= this.paginationInfo.last_page; i++) {
      let date = days[i - 1] 
      pages.push(
        <Page
          pageNumber={i}
          onClick = { onChange }
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




const Page = (props) => {
  let { isActive, date } = props
  const handleClick= () => {
    props.onClick(props.pageNumber);
    props.setSelectedDay(date);
  }
  return (
    <li className={isActive?'active':'' } onClick={handleClick}>
      <span href={'#'}>
        {moment(date,'YYYY/M/D').format('D')}
      </span>
    </li>
  )
}




const modalStyle={
  overlay: {
    // position: 'fixed',
    top: "30px",
    left: 0,
    right: 0,
    // bottom: "50%",
    // backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    overflowY:"hidden",
    zIndex:20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    //bottom: "100px",
    border: '1px solid #ccc',
    //background: '#fff',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    // borderRadius: '4px',
    outline: 'none',
    padding: 0,
    backgroundColor: '#efebe9',
    height:"100vh",

    
  }
}


export default DailyModal;