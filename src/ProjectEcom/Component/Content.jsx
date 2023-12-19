import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div>
       
        <nav className='nav'>
            <Link to='/'style={{color:'white',textDecoration:'none'}} >Home</Link>
            <Link to='/home'style={{color:'white',textDecoration:'none'}} >Product</Link>
            <Link to='/cart'style={{color:'white',textDecoration:'none'}} >Cart</Link>
        </nav>


    </div>
  )
}

export default Content