import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"

import React from 'react'

function HomePage() {
  return (
    <div>
    
        <Link to='/Beers'>All Beers!</Link>
        <br></br>
        <Link to='/RandomBeer'>Random Beer</Link>
        <br></br>
        <Link to='/NewBeer'>Create your own beer</Link>
    </div>
  )
}

export default HomePage