import React from 'react'
import {CartState} from "../context/Context"
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {
  const {state} = CartState()
  console.log(state)
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {state.products.map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Home