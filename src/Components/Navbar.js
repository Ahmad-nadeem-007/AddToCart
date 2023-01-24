import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
  const { cartData } = useSelector((state) => state.CartReducer)
  console.log(cartData,"in navBar")

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link" >Add Catageroy</Link>
        </li>
        <li className="nav-item">
          <Link to='/list' className="nav-link">Catageroy Detail</Link>
        </li>
    
       
      </ul>
    <div>
      <span className='lenght_card'>{cartData?.length}</span>
      <i class="fa-solid fa-cart-shopping fs-4"></i>
    </div>
      
    </div>
  </div>
</nav>
      
    </>
  )
}
