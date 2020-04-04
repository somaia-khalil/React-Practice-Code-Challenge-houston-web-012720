import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${100 - props.finishedeat.reduce((acc,sushi)=>
          acc += sushi.price
        ,0) } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
           
            renderPlates(props.finishedeat)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table