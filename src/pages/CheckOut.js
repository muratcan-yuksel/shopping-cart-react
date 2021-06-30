import React, {useState, useContext} from 'react'
import { ItemContext } from './ItemProvider'

export default function CheckOut() {

    const [items, setItems]= useContext(ItemContext)
    function foo(){
        setItems([...items, "lololow"])
    }
// const value= useContext(ItemContext)
console.log(items)
let harry = items[0].name
    return (
        <div>
            {/* <p>{items}[0].name </p> */}
            <p>{harry}</p>
            <button onClick={foo}>btn</button>
            
        </div>
    )
}
