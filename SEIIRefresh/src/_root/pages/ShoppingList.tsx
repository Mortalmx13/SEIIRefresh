import { Button } from "@/components/ui/button";
import { useState } from "react"


const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    setList([...list, { id: list.length + 1, title: value, isChecked: false}]);
    setValue("");
  }

  const deleteItem = (ids) => {
    const sortedList = list.filter((item) => item.id !== ids);
    setList(sortedList);
  }

return (
  <div className="flex flex-1">
    <div className="common-container">
      <div className="max-w-5xl flex-start gap-3 jusify-start w-full">
        <img 
          src="/assets/icons/filter.svg"
          width={36}
          height={36}
          alt="add"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Shopping List</h2>
        </div>
        <div className="max-w-5xl flex-start gap-3 jusify-start w-full">
          <input type="text" placeholder=" Enter an Item" className="shad-input" onChange={(e) => setValue(e.target.value)} value={value}/>
          <Button className={`shad-button_dark_4`} onClick={() => addItem()}>Add</Button>
          <Button className={`shad-button_dark_4`} onClick={() => window.print()}>Print Your List</Button>
        </div>
        <ul>
          {list.map((item) => (
            <li>
              <span style={{textDecoration: item.isChecked ? "line-thought" : "none",}}>
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList