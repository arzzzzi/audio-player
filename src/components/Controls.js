import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons' 


function Controls() {
  return (
    <div className='player-controls'>
      <button className="prevButton">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="playButton">
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button className="nextButton">
        <FontAwesomeIcon icon={faForward} />
      </button>
      
    </div>
  )
}

export default Controls
