//.................Ecommerce website..............

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './ProjectEcom/Component/Home'
import Card from './ProjectEcom/Component/Card'
import Navbar from './ProjectEcom/Component/Navbar'
import About from './ProjectEcom/Component/About'
import Data from './ProjectEcom/Data'
import Cart from './ProjectEcom/Component/Cart'
import { useState } from 'react'
const App = () => {
  const [search, setSearch]=useState("")
  const [cart,setCart]=useState([])
  const [data,setData]=useState(Data)
  
  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>
      <Routes>
        <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/about/:aboutId'element={<About Data={Data} handleClick={handleClick}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App










