import React from 'react'
import Metronome from './Metronome'

function Controls(props){
  return (
    <div id="controls">
      <div id="display">
        {props.display}
      </div>
      <Metronome />
    </div>
  )
}

export default Controls
