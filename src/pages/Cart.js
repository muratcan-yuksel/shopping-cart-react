import React, { useContext} from 'react'
import { ItemContext } from './ItemProvider'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


export default function Cart() {

      const [items, setItems]= useContext(ItemContext)
      
     
  
  const total= Object.values(items).reduce((t, {amount})=> t+ amount, 0)
    return (
        <Link  to={"/CheckOut"} >         
            <button style={{marginLeft:"2em"}} type="button" className="btn btn-danger position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      
          {total}
          {/* <span className="visually-hidden">unread messages</span> */}
        </span>
      </button> 
            </Link>

        
            
     
    )
}
