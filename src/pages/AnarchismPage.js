import React, {useContext} from 'react'
import Layout from "./Layout"
import "../styles/layout.css"
import { ItemContext } from './ItemProvider'

import Anarchism from "../images/anarchism.png"


export default function AnarchismPage() {

const obj={title:"Anarchism T-shirt", price:20, img:Anarchism, sign:"$", amount:0}

    const [items, setItems]= useContext(ItemContext)


const addToCart=()=>{
setItems(prevItems=>[...prevItems, obj])
console.log(items)
}



    return (
      <Layout>
        <div className="shopContainer">
        <div 
        className=" col-8 col-md-4 col-lg-4  text-center" 
        >
      <div className="card h-100 mx-auto w-100 ">          
          <img      
         src={obj.img}
        className="card-img-top h-100 "
            alt={obj.title}
          ></img>      
          <div className="card-body">
            <p className="card-text">{obj.title}</p>
            <p className="card-text">{obj.sign} {obj.price}</p>
            <div class= "amountBtns">
            <button style={{height:"3em"}} type="button" class="btn btn-dark">-</button>
            <p style={{fontSize:"2rem"}, {margin:"1rem"}} className="card-text">{obj.amount}</p>
            <button style={{height:"3em"}} type="button" class="btn btn-dark">+</button>            </div>

          </div>
        </div>
        </div>
        <button onClick={addToCart} style={{marginTop:"1rem"}} className="btn btn-danger">Add to cart</button>
        </div>
        </Layout>
    )
}
