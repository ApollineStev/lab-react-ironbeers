import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            setRandomBeer(res.data)
            
        })
}, [])

const random = randomBeer[Math.floor(Math.random()*randomBeer.length)]



  return (
    <div>
    {random &&
    <div>
        <h1 className='mt-4'>{random.name}</h1>
        <img className='my-5' style={{width:"40px"}} src={random.image_url} alt="beer-img"></img>

        <div className='details'>
          <p>{random.tagline}</p>
          <p>First brewed : {random.first_brewed}</p>
          <p>Attenuation level : {random.attenuation_level}</p>
          <p>{random.description}</p>
          <p>Contributed by : {random.contributed_by} </p>
        </div>
        
        
        <Link to={'/'}> Back</Link>
    </div>
          
    }

    </div>
  )
}

export default RandomBeer