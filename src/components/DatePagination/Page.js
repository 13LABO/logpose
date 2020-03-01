import React from 'react'
import moment from 'moment'

import './pagination.css'


export default function Page(props){
  let { isActive, date } = props
    const handleClick=() => {
    const { isDisabled, pageNumber } = props
    if (isDisabled) { return }
    props.onClick(pageNumber)
    props.setSelectedDay(date)
  }

  return (
    <li className={isActive?'active':'' } onClick={handleClick}>
      <span href={'#'}>
        {moment(date,'YYYY/M/D').format('D')}
      </span>
    </li>
  )
}