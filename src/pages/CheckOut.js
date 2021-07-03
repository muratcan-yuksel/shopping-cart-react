import React, {useState, useContext, useEffect} from 'react'
import { ItemContext } from './ItemProvider'
import Layout from "./Layout"

export default function CheckOut() {

    const [items, setItems]= useContext(ItemContext)
  
console.log(items)

useEffect(() => {
  const mappedItems= items.map(item=>{
    <div>
    console.log(item.title, item.price)
    <p>{item.title}</p>
    </div>
  })}, [items]);

const mappedItems= items.map(item=>{
  <div>
  console.log(item.title, item.price)
  <p>{item.title}</p>
  </div>
})

    return (
      <Layout>
        <div>
        {mappedItems}          
        </div>
        </Layout>
    )
}


   {/* <div className="shopContainer">
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
        <div class= "amountBtns">
        <button style={{height:"3em"}} type="button" class="btn btn-dark">-</button>
        <p style={{fontSize:"2rem"}, {margin:"1rem"}} className="card-text">{item.amount}</p>
        <button  style={{height:"3em"}} type="button" class="btn btn-dark">+</button>            </div>
      </div>
    </div>
    </div>
    <button  style={{marginTop:"1rem"}} className="btn btn-danger">Add to cart</button>
    </div> */}