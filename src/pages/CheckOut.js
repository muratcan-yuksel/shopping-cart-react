import React, {useState, useContext} from 'react'
import { ItemContext } from './ItemProvider'

export default function CheckOut() {

    const [items, setItems]= useContext(ItemContext)
  
console.log(items)

    return (
        <div>
yows            
        </div>
    )
}
