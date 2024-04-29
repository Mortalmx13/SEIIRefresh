import { Button } from "@/components/ui/button";
import { useState } from "react"

interface ListItem {
  id: number;
  title: string;
  quantity: number;
  isChecked: boolean;
}

const ShoppingList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [value, setValue] = useState<string>("");

  const addItem = () => {
    if (value.trim() === "") return;
    setList([...list, { id: list.length + 1, title: value.trim(), quantity: 1, isChecked: false }]);
    setValue("");
  };

  const deleteItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const increaseQuantity = (id: number) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setList(updatedList);
  };

  const decreaseQuantity = (id: number) => {
    const updatedList = list.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setList(updatedList);
  };


  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/filter.svg" width={36} height={36} alt="filter" />
          <h2 className="h3-bold md:h2-bold text-left w-full">Shopping List</h2>
        </div>
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <input
            type="text"
            placeholder="  Enter an Item"
            className="shad-input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button className={`shad-button_dark_4`} onClick={addItem}>
            Add
          </Button>
          <Button className={`shad-button_dark_4`} onClick={() => window.print()}>
            Print Your List
          </Button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id} className="flex items-center">
              <span style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>
                {item.title} x{item.quantity}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  className={`shad-button_dark_4`} // Decrease padding around the button
                  onClick={() => increaseQuantity(item.id)}
                  style={{ marginLeft: '10px' }}
                >
                  +
                </Button>
                <Button
                  className={`shad-button_dark_4`}
                  onClick={() => decreaseQuantity(item.id)}
                  style={{ marginRight: '5px' }}
                >
                  -
                </Button>
                <Button className={`shad-button_dark_4 text-sm p-.15`} onClick={() => deleteItem(item.id)}>
                  Remove Item
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList
