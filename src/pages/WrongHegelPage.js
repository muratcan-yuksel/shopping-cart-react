import React from 'react'
import Layout from "./Layout"
import {shopContainer} from "../styles/layout.module.css"

import WrongHegel from "../images/hegel-was-wrong.png"


export default function WrongHegelPage() {

const hegelWasWrong={title:"Hegel Was Wrong T-shirt", price:20, img:WrongHegel, sign:"$"}




    return (
      <Layout>
        <div className={shopContainer}>
        <div 
        className=" col-8 col-md-4 col-lg-4  text-center" 
        >
      <div className="card h-100 mx-auto w-100 ">          
          <img      
         src={hegelWasWrong.img}
        className="card-img-top h-100 "
            alt={hegelWasWrong.title}
          ></img>      
          <div className="card-body">
            <p className="card-text">{hegelWasWrong.title}</p>
            <p className="card-text">{hegelWasWrong.sign} {hegelWasWrong.price}</p>
          </div>
        </div>
        </div>
        <button style={{marginTop:"1rem"}} className="btn btn-danger">Add to cart</button>
        </div>
        </Layout>
    )
}
