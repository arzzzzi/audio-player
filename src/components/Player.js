import React from 'react'
import Details from './Details'
import Controls from './Controls'

function Player(props) {
  return (
    <div className='player'>
      <audio></audio>
      <h4>Сейчас проигрывается</h4>
      <Details song={props.song}/>
      <Controls />
      <p><strong>Следующая песня:</strong>{props.nextSong.title} - {props.nextSong.artist}</p>
    </div>
  )
}

export default Player
