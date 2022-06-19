import React from 'react'
import Table from './Table'

const Student = (props) => {
  return (
    <div><Table setStudent={props.setStudent} setReqBook={props.setReqBook} SignIn={props.SignIn}/></div>
  )
}

export default Student