import React, {useState, useContext, useEffect} from 'react'
import { ItemContext } from './ItemProvider'
import Layout from "./Layout"
import "../styles/layout.css"


export default function CheckOut() {

    const [items, setItems]= useContext(ItemContext)
  
console.log(items)

//reducer function to get the total payment
const total= Object.values(items).reduce((t, {price})=> t+ price, 0)

//finalize order function
const finalize = () =>{
  alert("I'm sorry, I can't let you do that.")
}

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
        <div className="btns">
         <p style={{fontWeight:"900"}, {color:"white"}}> Total payment: ${total} </p>
        </div>
        <div className="btns">
        <button onClick={finalize} className="btn btn-danger">Finalize order</button>
        </div>
        { mapped  }
       
        </div>
        </Layout>
    )
}


