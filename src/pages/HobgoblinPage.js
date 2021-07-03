import React from 'react'
import Layout from "./Layout"
import "../styles/layout.css"

import Hobgoblin from "../images/hobgoblin.png"


export default function HobgoblinPage() {

const obj={title:"Hobgoblin T-shirt", price:20, img:Hobgoblin, sign:"$", amount:0}




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
          </div>
        </div>
        </div>
        <button style={{marginTop:"1rem"}} className="btn btn-danger">Add to cart</button>
        </div>
        </Layout>
    )
}
