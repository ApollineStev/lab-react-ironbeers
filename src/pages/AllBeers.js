import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"
import React from 'react'

function AllBeers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            setBeers(res.data)
            console.log(beers)
        })
    }, [])
  return (
    <div>
        {beers.map(beer => {
            return (
                <div key={beer._id}>
                  <Link className="text-decoration-none text-dark" to={`/Beers/${beer._id}`}>
                    <img style={{width:"40px"}} src={beer.image_url} alt="beer-img"></img>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    <p>check the details</p>
                    
                    <br></br>
                  </Link>

                    

                </div>
            )
        })}
    </div>
  )
}

export default AllBeers