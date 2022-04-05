import React from 'react'
import Phone1 from "../pictures/phone1.jpg"
import Phone2 from "../pictures/phone2.jpg"
import Phone4 from "../pictures/phone4.jpg"

function Products() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>SumSung</h2>
    <img src={Phone1} alt=""/>
    <p>Ghc1,300</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
       <h2>iPhone</h2>
       <img src={Phone2} alt=""/>
       <p>Ghc 10,000</p>
       <button>Buy Me</button>
    </div>

    <div className='card'>
       <h2>Techno</h2>
       <img src={Phone4} alt=""/>
       <p>Ghc800</p>
       <button>Buy Me</button>
    </div>
 </div>
    <div className='headphones'></div>

    <div className='pendrives'></div>

    <div className='phonecases'></div>
    </div>
    
  )
}

export default Products