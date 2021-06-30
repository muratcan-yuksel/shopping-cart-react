import React, {useState, useContext} from 'react'
import { ItemContext } from './ItemProvider'

export default function CheckOut() {

    // const {items, setItems}= useContext(ItemContext)
const value= useContext(ItemContext)
console.log(value)
    return (
        <div>
            <p>{value} </p>
            
        </div>
    )
}
