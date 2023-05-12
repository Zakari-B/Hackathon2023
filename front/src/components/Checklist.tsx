import React from 'react'
import "@assets/css/checklist.css"
import { SuitcaseItem } from "../types/Item.t"
import { Area, AreaList, AreaSelect } from "../types/Area.t"
import { ucfirst } from '@utils/functions'

const Checklist = ({ itemList, itemToggle, areaSetter, areas, selectedArea, setSelectedArea, checklistLoading, isChecklistLoading, getFullItemList }: { itemList: SuitcaseItem[], itemToggle: (item: SuitcaseItem) => void, areaSetter: (value: Area) => void, areas: AreaList, selectedArea: string | null, setSelectedArea: (value: string) => void, checklistLoading: boolean, isChecklistLoading: (value: boolean | (() => boolean)) => void, getFullItemList: () => void }) => {

    return (
        <div className="checklist">
            <h2>Checklist vacances {selectedArea !== "" ? `à la ${selectedArea}` : null}! 😎</h2>
            <select className="area-select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                isChecklistLoading(true);
                if (e.target[e.target.selectedIndex].getAttribute('data-name') !== null && e.target[e.target.selectedIndex].getAttribute('data-name') !== "") {
                    setSelectedArea(e.target[e.target.selectedIndex].getAttribute('data-name') as string)
                    areaSetter(e.target.value as AreaSelect["value"])
                } else {
                    setSelectedArea("")
                    getFullItemList()
                }
            }
            }>
                <option value="" data-name=""></option>
                {areas.map((area) => {
                    return <option value={area.id} data-name={area.name}>{ucfirst(area.name)}</option>;
                })}
            </select>
            <ul>
                {checklistLoading === true ? <p>Writing list...</p> :
                    itemList.map((item: SuitcaseItem) => {
                        return (
                            <li key={item.name}>
                                <input type="checkbox" onChange={() => itemToggle(item)} name={item.name} id={item.name} />
                                <label htmlFor={item.name}>{ucfirst(item.name)}</label>
                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}

export default Checklist