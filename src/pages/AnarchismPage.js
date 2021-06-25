import React from 'react'
import Layout from "./Layout"
import {shopContainer} from "../styles/layout.module.css"

import Anarchism from "../images/anarchism.png"


export default function AnarchismPage() {
const anarchism={title:"Anarchism T-shirt", price:20, img:Anarchism, sign:"$"}




    return (
      <Layout>
        <div className={shopContainer}>
        <div 
        className=" col-8 col-md-4 col-lg-4  text-center" 
        >
      <div className="card h-100 mx-auto w-100 ">          
          <img      
         src={anarchism.img}
        className="card-img-top h-100 "
            alt={anarchism.title}
          ></img>      
          <div className="card-body">
            <p className="card-text">{anarchism.title}</p>
            <p className="card-text">{anarchism.sign} {anarchism.price}</p>
          </div>
        </div>
        </div>
        <button style={{marginTop:"1rem"}} className="btn btn-danger">Add to cart</button>
        </div>
        </Layout>
    )
}
