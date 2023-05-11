import React from 'react'
import "@assets/css/checklist.css"
import { Item } from "../types/Item.t"
import { ucfirst } from '@utils/functions'

const Checklist = ({ itemList, itemToggle }: { itemList: Item[], itemToggle: (item: Item) => void }) => {
    return (
        <div className="checklist">
            <h2>Checklist vacances ! 😎</h2>
            <ul>
                {itemList.map((item: Item) => {
                    return (
                        <li key={item.name}>
                            <input type="checkbox" onChange={() => itemToggle(item)} name={item.name} id={item.name} />
                            <label htmlFor={item.name}>{ucfirst(item.name)} x{item.qty}</label>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Checklist