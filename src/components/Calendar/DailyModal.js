import React, { useState } from 'react';
import ReactModal from 'react-modal';
import DatePagination from '../DatePagination/index';
import '../../css/modal.css';

const DailyModal = (props) => {
  const uniq = array =>  [...new Set(array)];
  const [pageNumber, setPageNumber] = useState(6); //shows 6th date because of this

  const handlePageChange= pageNumber => setPageNumber(pageNumber)
  
  
  //ここで日付の配列を用意する
  let daysArray = props.momentList.map(e=>e.toDate())
  const days = uniq(daysArray.map(e=>e.toLocaleDateString("ja-JP")));
  let activeContent = 'hello'//daysArray[pageNumber-1].date


  const handleAfterOpenFunc = (e) =>{
    console.log(props.selectedDay)
  }

  return (
    <div className="center center-align">
      <ReactModal
        isOpen={ props.isModalOpen }
        contentLabel={"Example Modal"}
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        parentSelector={() => document.body}
        aria={{labelledby: "heading", describedby: "full_description"}}
        onAfterOpen={ handleAfterOpenFunc }
        style={modalStyle}
        closeTimeoutMS={150}
      >
      <div>
        <div style={{height:'4em',background:'lightgrey',paddingTop:'10px'}}>
          {/* <p>Modal Content is here!</p> */}
          <div onClick={()=>{props.setModalOpen(!props.isModalOpen)}}  className='valign-wrapper' style={{width:'30%'}}>
            <i className="material-icons medium" style={{opacity:0.4}}>chevron_left</i>
            <span style={{transform:'translateX(-10px)'}}>戻る</span>
          </div>
        </div>
        {/* <div className='container red-text'>
          <p>Modal Content is here!</p>
        </div> */}
        

        <div className='center-align'>

          <DatePagination
            totalItemsCount={days.length}
            onChange={ handlePageChange }
            activePage={ pageNumber } //ここがだいじ
            itemsCountPerPage={1}
            pageRangeDisplayed={7}
            days={ days }
            setSelectedDay={ props.setSelectedDay }
            selectedDay={ props.selectedDay }
          />
          <p>active page is { pageNumber }</p>
          <p>active content is { activeContent }</p>
          <p>selectedDay is { props.selectedDay }</p>

        </div>
      </div>
      </ReactModal>
    </div>
  );
}










const modalStyle={
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '50px',
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: 0,
    backgroundColor: 'aliceblue',
  }
}

 
export default DailyModal;
