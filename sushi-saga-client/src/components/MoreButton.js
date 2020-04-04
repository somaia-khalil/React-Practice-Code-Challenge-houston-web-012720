import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(e)=>props.limit4(e)}>
            More sushi!
          </button>
}

export default MoreButton