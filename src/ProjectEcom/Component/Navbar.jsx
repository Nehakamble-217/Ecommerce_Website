import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'


const Navbar = ({setSearch,size,data,setData}) => {

    const filterResult = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }
    const filterResult2 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }
    const filterResult3 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }
    const filterResult4 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }
  return (
    <div className='navbar'>
        <nav className='nav '>
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
                <Link style={{color:'white',textDecoration:'none'}} to='/cart'> <button>Add Cart <sup>{size}</sup></button></Link>
            </div>
        </article>
        <article className='artbtn'>
            <button onClick={()=>filterResult(`men's clothing`)} >Men</button>
            <button onClick={()=>filterResult2(`women's clothing`)}>Woman</button>
            <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
            <button onClick={()=>filterResult4(`jewelery`)}>Jewelery</button>
        </article>
        </nav>
  
    </div>
  )
}

export default Navbar