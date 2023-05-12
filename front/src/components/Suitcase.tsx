import "@assets/css/suitcase.css"
import { SuitcaseItem } from "../types/Item.t"

const Suitcase = ({ itemList }: { itemList: SuitcaseItem[] }) => {
    return (
        <div className="suitcase-inner">
            <div className="suitcase-front"></div>
            <div className="suitcase-left"></div>
            <div className="suitcase-right"></div>
            <div className="suitcase-back"></div>

            {itemList
                .filter(item => item.checked)
                .map(item => {
                    return <div className="item" key={item.name}><img src={`${item.image}`} alt="Item" /></div>
                })}
        </div>
    )
}

export default Suitcase