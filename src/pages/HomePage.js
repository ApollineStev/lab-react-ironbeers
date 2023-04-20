import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"

import React from 'react'

function HomePage() {
  return (
    <div>
        <div className="homecard">
          <Link className=" text-decoration-none text-dark" to='/Beers'>
            <img className="w-100" src="/assets/beers.png" alt="allbeerimg"></img>
            <div className="presentation">
               <h1>All Beers!</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus ligula. Suspendisse hendrerit felis quis ullamcorper vehicula. Aliquam dictum est molestie, porta ligula vitae, scelerisque ante. Aenean nec est vel nibh commodo porta. Sed luctus risus sed lectus gravida, in molestie felis rhoncus. Etiam eu tempor odio. Donec feugiat lacus quis lectus fermentum vestibulum. Suspendisse vestibulum, tortor ac molestie viverra, ligula purus hendrerit turpis, eget euismod erat dolor a dui. Cras viverra nulla quis suscipit sollicitudin.</p>
            </div>
           </Link>
        </div>

        <div className="homecard">
          <Link className=" text-decoration-none text-dark" to='/RandomBeer'>
            <img className="w-100" src="/assets/random-beer.png" alt="allbeerimg"></img>
            <div className="presentation">
              <h1>Random Beer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus ligula. Suspendisse hendrerit felis quis ullamcorper vehicula. Aliquam dictum est molestie, porta ligula vitae, scelerisque ante. Aenean nec est vel nibh commodo porta. Sed luctus risus sed lectus gravida, in molestie felis rhoncus. Etiam eu tempor odio. Donec feugiat lacus quis lectus fermentum vestibulum. Suspendisse vestibulum, tortor ac molestie viverra, ligula purus hendrerit turpis, eget euismod erat dolor a dui. Cras viverra nulla quis suscipit sollicitudin.</p>
            </div>
            </Link>
        </div>
        
        <div className="homecard">
          <Link className=" text-decoration-none text-dark" to='/NewBeer'>
            <img className="w-100" src="/assets/new-beer.png" alt="allbeerimg"></img>
            <div className="presentation">
              <h1>All Beers!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tellus ligula. Suspendisse hendrerit felis quis ullamcorper vehicula. Aliquam dictum est molestie, porta ligula vitae, scelerisque ante. Aenean nec est vel nibh commodo porta. Sed luctus risus sed lectus gravida, in molestie felis rhoncus. Etiam eu tempor odio. Donec feugiat lacus quis lectus fermentum vestibulum. Suspendisse vestibulum, tortor ac molestie viverra, ligula purus hendrerit turpis, eget euismod erat dolor a dui. Cras viverra nulla quis suscipit sollicitudin.</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default HomePage