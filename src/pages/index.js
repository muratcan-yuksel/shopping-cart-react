import React from "react"
import Layout from "./Layout"
import "../styles/layout.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import WelcomeImg from "../images/welcome.jpg"

export default function Home() {
  return (
  <Layout>
<div className="indexContainer">

<img src={WelcomeImg} style={{maxWidth:"100%"}, {maxHeight:"55vh"}} />

<button type="button" style={{marginTop:"3em"}} className="btn btn-danger btn-lg">

  <Link style={ {color:"black"}} to="/Shop">
  <del>SHOP</del> CONSUME NOW
  </Link>
  
  </button>

</div>


 </Layout>
  )
}
