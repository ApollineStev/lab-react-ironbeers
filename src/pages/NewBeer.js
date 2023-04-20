import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NewBeer() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirst_brewed] = useState("")
  const [brewers_tips, setBrewers_tips] = useState("")
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contributed_by, setContributed_by] = useState("")
  const [image, setImage] = useState("")

  const navigate = useNavigate()

  const handleNameChange = (e) => {
      setName(e.target.value)
  }
  const handleTaglineChange = (e) => {
    setTagline(e.target.value)
}
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleFirst_brewedChange = (e) => {
    setFirst_brewed(e.target.value)
  }
  const handleBrewers_tipsChange = (e) => {
    setBrewers_tips(e.target.value)
  }
  const handleAttenuation_levelChange = (e) => {
    setAttenuation_level(e.target.value)
  }
  const handleContributed_byChange = (e) => {
    setContributed_by(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const beer = {
        name,
        tagline,
        description, 
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
        image_url: image
        
    }

    axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
        .then(res => {
            navigate("/Beers")
        })

}


  return (
    <div>
      <h1 className='mt-5'>Add a new beer!</h1>
      <form className='newbeer' onSubmit={handleSubmit}>
        <div className='label'>
          <label>Name : </label>
          <input onChange={handleNameChange} value={name} />
        </div>
        <div className='label'>
          <label>Tagline : </label>
          <input onChange={handleTaglineChange} value={tagline} />
        </div>
        <div className='label'>
          <label>Description : </label>
          <input onChange={handleDescriptionChange} value={description} />
            
        </div>
        <div className='label'>
          <label>First brewed : </label>
          <input onChange={handleFirst_brewedChange} value={first_brewed} />
        </div>
        <div className='label'>
          <label>Brewers tips : </label>
          <input onChange={handleBrewers_tipsChange} value={brewers_tips} />
        </div>
        <div className='label'>
          <label>Attenuation level : </label>
          <input onChange={handleAttenuation_levelChange} value={attenuation_level} />
        </div>
        <div className='label'>
          <label>Contributed by : </label>
          <input onChange={handleContributed_byChange} value={contributed_by} />
        </div>
        <div className='label'>
          <label>Image : </label>
          <input onChange={handleImageChange} value={image} />
        </div>
        <div className='button'>
          <button className='add' type='submit'>Add</button>
        </div>

        

      </form>
    </div>
  )
}

export default NewBeer