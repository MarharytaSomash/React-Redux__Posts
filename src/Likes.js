import {connect} from 'react-redux'
import React from 'react'

function Likes(props) {
  return (
     <div className='button-controls'>
        <button> ❤ {props.like}</button>
        <button > Dislikes</button>
    </div>
  )
}
function mapStateToProps(state) {
   return {
      likes:state.likes
   }

}
export default connect(mapStateToProps)(Likes)