import React from 'react'
import mbl from '../assets/mobile.jpg'
import Navbar from '../Components/Navbar'
export default function About(props) {
  console.warn('Home', props);
  return (
    <>
      <Navbar />
      <div className='text-center'>

        <div className='mt-5'>
          <h1>I am a About</h1>

        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card p-5">
                <div className="card-img">
                  <img src={mbl} alt="w8" style={{ width: '200px' }} />
                </div>
                <div className="card-title">
                  <h4>I Phone 11</h4>
                  <span>Price: $1000.00</span>
                  <span>
                    <button type='button' onClick={() => props.addToCarthandle({ price: 1000.00, name: 'i phone 11' })} className='ms-2 btn btn-primary'>Add to cart</button>
                 
                    
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card p-5">
                <div className="card-img">
                  <img src={mbl} alt="w8" style={{ width: '200px' }} />
                </div>
                <div className="card-title">
                  <h4>I Phone 10</h4>
                  <span>Price: $9000.00</span>
                  <span>
                    <button type='button' onClick={() => props.addToCarthandle({ price: 9000.00, name: 'i phone 10' })} className='ms-2 btn btn-primary'>Add to cart</button>
                 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
