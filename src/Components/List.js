import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from './Navbar'

import{removetocart} from '../Services/actions/action'
export default function List(props) {
  const dispatch = useDispatch();
  const removeToCarthandle=(data)=>{
    dispatch(removetocart(data))
  }

  console.log('list', props)
  const { cartData } = useSelector((state) => state.CartReducer)

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5 mb-5">

        <div className="row">

          <div className="col-12 mt-1" style={{ border: '1px solid' }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Catageroy</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartData?.length &&
                  cartData.map((value, index) => {
                    return (
                      <tr>
                        <td> {++index}</td>
                        <td> {value?.name}</td>
                        <td> {value?.price}</td>
                        <td><button className='btn btn-danger' onClick={removeToCarthandle}>remove</button></td>
                      </tr>

                    )
                  })

                }
              </tbody>
            </table>

          </div>


        </div>
      </div>

    </>
  )
}
