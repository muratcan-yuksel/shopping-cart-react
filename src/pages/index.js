import React from "react"
import Layout from "./Layout"
import {indexContainer} from "../styles/layout.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
  <Layout>
<div className={indexContainer}>
{/* <div>Hello world bruh</div> */}

<img src="/welcome.jpg" style={{maxWidth:"100%"}, {maxHeight:"55vh"}} />
<button type="button" style={{marginTop:"3em"}} class="btn btn-danger btn-lg">
  <Link style={ {color:"black"}} to="/Shop">
  <del>SHOP</del> CONSUME NOW
  </Link>
  </button>

</div>


  </Layout>
  )
}
