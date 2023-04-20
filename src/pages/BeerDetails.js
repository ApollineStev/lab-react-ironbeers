import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"

function BeerDetails() {
    const [beer, setBeer] = useState(null)
    const { id } = useParams()

    const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBeer(res.data)
                console.log(res.data)
            })
    }, [])

  return (
    <div>
        {beer && 
        <div>

            <h1 className='mt-4'>{beer.name}</h1>
            <img className='my-5' style={{width:"60px"}} src={beer.image_url} alt="beer-img"></img>

            <div className='details'>
                <h5>{beer.tagline}</h5>
                <p>First brewed : {beer.first_brewed}</p>
                <p>Attenuation level : {beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>Contributed by : {beer.contributed_by} </p>
            </div>
            
        
            <Link to={'/Beers'}> Back</Link>

        </div>
        
        }
    </div>
  )
}

export default BeerDetails