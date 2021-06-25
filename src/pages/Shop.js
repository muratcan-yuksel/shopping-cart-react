import React, { useState, useEffect } from "react";
import Layout from "./Layout"
import uniqid from "uniqid";
import WrongHegel from "../images/hegel-was-wrong.png"
import Anarchism from "../images/anarchism.png"
import Hobgoblin from "../images/hobgoblin.png"
import MadMarx from "../images/mad-marx.png"
import MarxBlack from "../images/mad-marx-black.png"
import MarxLemon from "../images/marx-lemon.png"
import PhiloClub from "../images/philo-club.png"
import Freedom from "../images/radical-freedom.png"
import Revolution from "../images/revolution.png"
import UpsideHegel from "../images/upside-hegel.png"
import { Link } from "gatsby"





export default function Shop() {

    const Cards= (props)=>[
        {title:"Anarchism T-shirt", price:20, id:uniqid(), img:Anarchism, sign:"$", to:"/AnarchismPage"},
        {title:"Hegel was wrong T-shirt", price:20, id:uniqid(), img:WrongHegel, sign:"$", to:"/WrongHegelPage"},
        {title:"Hobgoblin T-shirt", price:20, id:uniqid(), img:Hobgoblin, sign:"$", to:"/HobgoblinPage"},
        {title:"Mad Marx T-shirt", price:20, id:uniqid(), img:MadMarx, sign:"$", to:"/MadMarxPage"},
        {title:"Mard Marx T-shirt Black", price:20, id:uniqid(), img:MarxBlack, sign:"$", to:"/MadMarxBlackPage"},
        {title:"Life gives you lemons T-shirt", price:20, id:uniqid(), img:MarxLemon, sign:"$", to:"/MarxLemonPage"},
        {title:"Wittgenstein and Russell-Philosophy Club T-shirt", price:20, id:uniqid(), img:PhiloClub, sign:"$", to:"/PhilosophyClubPage"},
        {title:"Radical Freedom T-shirt", price:20, id:uniqid(), img:Freedom, sign:"$", to:"/RadicalFreedomPage"},
        {title:"Marx-Revolution T-shirt", price:20, id:uniqid(), img:Revolution, sign:"$", to:"/RevolutionPage"},
        {title:"Hegel turned upside down T-shirt", price:20, id:uniqid(), img:UpsideHegel, sign:"$", to:"/UpsideHegelPage"}
        ];
        
        const [state, setState]= useState(Cards)
        
        const mappedCards= state.map((item)=>{
            return(
                          
                <div key={item.id}
                className=" col-4  text-center" style={{width:"15em"}}
                >
                    <div className="card h-100 mx-auto w-100 ">
                    <Link to={item.to}>      
                  <img
                 
                 src={item.img}
                    id={item.id}
                    className="card-img-top h-100 "
                    alt={item.title}
                  ></img>
                  </Link> 
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.sign} {item.price}</p>
                  </div>
                </div>
                </div>
                
 
            )
        })

    return (
        <Layout>
        <div className="container">
            <div className="row"> {mappedCards} </div>
            

        </div>
        </Layout>
    )
}
