import React from 'react'

export default function GroceryList(props) {
  return (
    <div>
        <h1>{props.item.item}</h1>
        <ul>
            <li>Brand: {props.item.brand}</li>
            <li> How big: {props.item.units}</li>
            <li>How many: {props.item.quantity}</li>
        </ul>
    </div>
  )
}
