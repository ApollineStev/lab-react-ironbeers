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
            <h1>{beer.name}</h1>
            <img style={{width:"40px"}} src={beer.image_url} alt="beer-img"></img>
            <Link to={'/Beers'}> Back</Link>
        </div>
        
        }
    </div>
  )
}

export default BeerDetails