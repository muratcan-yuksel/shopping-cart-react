import React, {useState, useContext, useEffect} from 'react'
import { ItemContext } from './ItemProvider'
import Layout from "./Layout"
import "../styles/layout.css"


export default function CheckOut() {

    const [items, setItems]= useContext(ItemContext)
  
console.log(items)
//I'll use this to update the increment/decrement functions
const [state,setState]= useState(items)

const mapped = items.map((item=>{
  console.log(item.title)
  return (
    <div key={item.id}>
       <div className="shopContainer">
        <div 
        className=" col-8 col-md-4 col-lg-4  text-center" 
        >
      <div className="card h-100 mx-auto w-100 ">          
          <img      
         src={item.img}
        className="card-img-top h-100 "
            alt={item.title}
          ></img>      
          <div className="card-body">
            <p className="card-text">{item.title}</p>
            <p className="card-text">{item.sign} {item.price}</p>
            <div className= "amountBtns">
            <p style={{fontSize:"2rem"}, {margin:"1rem"}} className="card-text">Amount:  {item.amount}</p>
             </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}))


    return (
      <Layout>
        <div>
        { mapped  }
        <div className="btns">
        <button className="btn btn-danger">Finalize order</button>
        </div>
        </div>
        </Layout>
    )
}


