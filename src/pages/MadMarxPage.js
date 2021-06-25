import React from 'react'
import Layout from "./Layout"
import {shopContainer} from "../styles/layout.module.css"

import MadMarx from "../images/mad-marx.png"


export default function MadMarxPage() {

const obj={title:"Mad Marx T-shirt", price:20, img:MadMarx, sign:"$"}




    return (
      <Layout>
        <div className={shopContainer}>
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
