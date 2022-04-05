import React from 'react'
import phones from "../pics/phones.jpg"
import head from "../pics/head2.jpg"
import drive from "../pics/drive1.jpg"
import cases from "../pics/case4.jpg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>

    <div className='card'>
       <h2>SmartPhones</h2>
       <img src={phones} alt=""/>
       <p>We sell quality smart phones at affordable prices</p>
       <button> <Link to ="/products">View Phones</Link>  </button>
    </div>

    <div className='card'>
       <h2>HeadPhones</h2>
       <img src={head} alt=""/>
       <p>We sell quality smart phones at affordable prices</p>
       <button> <Link to="/products">View HeadPhones</Link> </button>
    </div>
    </div>

    <div className='second-row'>

    <div className='card'>
       <h2>Pen Drives</h2>
       <img src={drive} alt=""/>
       <p>We sell quality smart phones at affordable prices</p>
       <button> <Link to="/products">View Phones</Link> </button>
    </div>

    <div className='card'>
       <h2>Phones Cases</h2>
       <img src={cases} alt=""/>
       <p>We sell quality smart phones at affordable prices</p>
       <button>View Phones</button>
    </div>
    </div>
    
    </div>
  )
}

export default Home