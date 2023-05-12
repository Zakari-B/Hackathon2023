import { useEffect, useState } from 'react'
import { AxiosResponse } from "axios"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import Checklist from '@components/Checklist'
import '@assets/css/App.css'
import { Item, SuitcaseItem } from "./types/Item.t"
import { Area, AreaList, AreaListItem } from "./types/Area.t"
import Suitcase from '@components/Suitcase'
import backend from "@utils/APILink"

function App() {
  const [items, setItems] = useState<SuitcaseItem[]>([])
  const [areas, setAreas] = useState<AreaList | []>([])
  const [selectedArea, setSelectedArea] = useState("");
  const [checklistLoading, isChecklistLoading] = useState(false)

  const itemToggle = (item: SuitcaseItem) => {
    item.checked = !item.checked; // change boolean value
    const listUpdate = items.map((oldItem) => {
      if (oldItem.name === item.name) {
        oldItem = { ...item }
      }
      return oldItem;
    })
    setItems(() => listUpdate)
  }

  const areaSetter = async (value: Area) => {
    backend.get(`/api/areas/${value}.json`)
      .then((res: AxiosResponse) => res.data)
      .then(async (area: AreaListItem) => {
        const promiseMap: Promise<AxiosResponse<Item, any>>[] = area.items.map((item) => backend.get(item))
        const result = await Promise.all(promiseMap);
        return result
      })
      .then((items) => {
        const newList: SuitcaseItem[] = items.map(item => {
          const newItem = { id: item.data.id, name: item.data.name, image: item.data.image, duration: item.data.duration, quantity: item.data.quantity, checked: false }
          return newItem
        })
        setItems(() => newList)
        isChecklistLoading(() => false)
      })
  }

  useEffect(() => {
    backend.get(`/api/areas.json`)
      .then((res: AxiosResponse) => res.data)
      .then((areaList: AreaList) => {
        setAreas(() => areaList)
      });
  }, []) // eslint-disable-line

  const getFullItemList = () => {
    backend.get(`/api/items.json`)
      .then((res: AxiosResponse) => res.data)
      .then((itemList: Item[]) => {
        const newList: SuitcaseItem[] = itemList.map(item => ({ ...item, checked: false }))
        setItems(() => newList);
        isChecklistLoading(() => false)
      });
  }
  useEffect(() => {
    getFullItemList()
  }, []) // eslint-disable-line

  return (
    <>
      <Navbar />
      <main>
        <div className="suitcase-container">
          <Suitcase itemList={items} />
        </div>
        <div className="checklist-container">
          <Checklist itemList={items} itemToggle={itemToggle} areaSetter={areaSetter} areas={areas} selectedArea={selectedArea} setSelectedArea={setSelectedArea} checklistLoading={checklistLoading} isChecklistLoading={isChecklistLoading} getFullItemList={getFullItemList} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
