import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import Checklist from '@components/Checklist'
import '@assets/css/App.css'
import { Item } from "./types/Item.t"
import Suitcase from '@components/Suitcase'

function App() {
  const [items, setItems] = useState<Item[]>([])

  const itemToggle = (item: Item) => {
    item.checked = !item.checked; // change boolean value
    const listUpdate = items.map((oldItem) => {
      if (oldItem.name === item.name) {
        oldItem = { ...item }
      }
      return oldItem;
    })
    setItems(() => listUpdate)
  }

  const testList = [
    {
      "name": "socks",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "underwear",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "sunglasses",
      "img": "duck.png",
      "qty": 1
    },
    {
      "name": "shoes",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "lizard",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "ball",
      "img": "duck.png",
      "qty": 1
    },
    {
      "name": "bag",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "cat",
      "img": "duck.png",
      "qty": 7
    },
    {
      "name": "fork",
      "img": "duck.png",
      "qty": 1
    }
  ]

  useEffect(() => {
    const newList = testList.map(item => ({ ...item, checked: false }))
    setItems(() => newList);
  }, []) // eslint-disable-line

  useEffect(() => {
    console.log(items.filter(item => item.checked))
  }, [items]) // eslint-disable-line

  return (
    <>
      <Navbar />
      <main>
        <div className="suitcase-container">
          <Suitcase itemList={items} />
        </div>
        <div className="checklist-container">
          <Checklist itemList={items} itemToggle={itemToggle} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
