import type { MenuItem } from "../types/index.ts"

type MenuItemsProps = {
    item: MenuItem
    addItem: (item : MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemsProps) {
  return (
    <button 
        className="border-2 border-violet-500 font-semibold hover:bg-violet-200 w-full p-3 flex justify-between rounded-lg"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

