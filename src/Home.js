import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addtocart} from './Services/actions/action'
// import{removetocart} from './Services/actions/action'
import About from './Components/About'
// import List from './Components/List';
// import HomeContainer from './container/HomeContainer'

export default function Home() {
  const dispatch = useDispatch();
  const handleAddToCart=(data)=>{
    dispatch(addtocart(data))
  }
  // const removetocarthandel=(data)=>{
  //   dispatch(removetocart(data))
  // }
  // ------data--number--ad in icon--
  const { cartData } = useSelector((state) => state.CartReducer)

  return (
    <>
    <div className="container-fluid">
    <About addToCarthandle={handleAddToCart} />
    
{/* </HomeContainer> */}

    </div>

      
    </>
  )
}
