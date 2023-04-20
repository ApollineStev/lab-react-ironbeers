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
                  <Link className="beerlist text-decoration-none text-dark" to={`/Beers/${beer._id}`}>
                    <img style={{width:"50px"}} className="m-2" src={beer.image_url} alt="beer-img"></img>
                    <div className="allpresentation">
                      <h2>{beer.name}</h2>
                      <p>{beer.tagline}</p>
                      <p>{beer.contributed_by}</p>
                    </div>
                  </Link>
                </div>
            )
        })}
    </div>
  )
}

export default AllBeers