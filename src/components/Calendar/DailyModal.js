import React, { useState } from 'react';
import ReactModal from 'react-modal';
import DatePagination from '../DatePagination/index';

const DailyModal = (props) => {

  const [pageNumber, setPageNumber] = useState(1);


  const handlePageChange= (pageNumber) => {
    setPageNumber(pageNumber)
  }
  
  //ここで日付の配列を用意する
  let daysArray = [{date:'2018-06-01'}, {date:'2018-06-02'}, {date:'2018-06-03'},{date:'2018-06-04'}, {date: '2018-06-05'}, {date: '2018-06-06'},{date: '2018-06-07'}, {date: '2018-06-08'}, {date: '2018-06-09'}];
  let activeContent = daysArray[pageNumber-1].date
  //console.log(activeContent)
  //console.log(this.handlePageChange)

  const handleAfterOpenFunc = (e) =>{
    console.log(props.selectedDay)
  }

  return (


    <div className="center">
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
      >
        <div style={{height:'4em',background:'lightgrey',paddingTop:'10px'}}>
          <p>Modal Content is here!</p>
        </div>
        <div className='container red-text'>
          <p>Modal Content is here!</p>
        </div>
        
        <button onClick={()=>{props.setModalOpen(!props.isModalOpen)}}>modal</button>

        <div>
          <DatePagination
            activePage={ pageNumber-0 }
            itemsCountPerPage={1}
            totalItemsCount={daysArray.length}
            days={daysArray}
            pageRangeDisplayed={5}
            onChange={ handlePageChange }
          />
          <p>active page is { pageNumber }</p>
          <p>active content is { activeContent }</p>
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
  }
}

 
export default DailyModal;
