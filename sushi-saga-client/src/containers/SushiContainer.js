import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.arrayOf4.map(sushi => <Sushi sushi={sushi} finished={props.finished} finishedeat ={props.finishedeat}/> ) 
        }
        <MoreButton limit4={props.limit4}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer