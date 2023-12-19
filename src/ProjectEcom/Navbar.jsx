
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setSearch,size}) => {
  return (
    <div className='navbar'>
        <nav className='nav'>
        <article className='navart'>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>
                    ShopMore
                </Link>
            </div>
            <div className='navdiv'>
                <input onChange={((e)=>setSearch(e.target.value))} type="search" placeholder='Search your Products'/>
            </div>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/cart'> Cart<sup>{size}</sup></Link>
            </div>
        </article>
        </nav>
    </div>
  )
}

export default Navbar