import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('dolphin'); // Default search term

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=LCNaR8jsj10hWwVyUyniJ7JkrJhsnFS1&rating=g`)
        .then(r=>r.json())
        .then(data => {
        const firstThreeGifs = data.data.slice(0, 3).map(giphys =>giphys.images.original.url);
        setGifs(firstThreeGifs);
        })
        .catch(error => console.log(error))
},[searchTerm]);
// Handler function for submitting the search form
const handleSearchSubmit = (newsearchTerm) => {
    setSearchTerm(newsearchTerm)
  };

  return (
    <div>
        <GifSearch submitHandler={handleSearchSubmit}/>
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer
