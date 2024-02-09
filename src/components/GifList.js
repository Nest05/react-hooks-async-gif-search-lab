import React from 'react'

function GifList({gifs}) {
  return (
    <div>
      <ul>
        {gifs.map(gif=><li key={gif}><img src={gif} alt="giphy"/></li>)}
      </ul>
    </div>
  )
}

export default GifList
