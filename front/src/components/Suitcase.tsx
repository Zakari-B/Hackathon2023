import React from 'react'
import "@assets/css/suitcase.css"
import { Item } from "../types/Item.t"

const Suitcase = ({ itemList }: { itemList: Item[] }) => {
    return (
        <div className="suitcase-inner">
            {itemList
                .filter(item => item.checked)
                .map(item => {
                    return <div className="item" key={item.name}><img src={`${item.img}`} alt="Item" /></div>
                })}
        </div>
    )
}

export default Suitcase