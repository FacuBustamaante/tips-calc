import MenuItems from "./Components/MenuItems"
import OrderContents from "./Components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./Components/OrderTotals"
import TipPercentageForm from "./Components/TipPercentageForm"

function App() {
    const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

    return (
        <>
            <header className="bg-violet-600 py-8 text-white">
                <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
            </header>
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menú</h2>
                    <div className="space-y-3 mt-5">
                        {menuItems.map(item => (
                        <MenuItems 
                            key={item.id}
                            item={item}
                            addItem={addItem}
                        />
                    ))}
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                    
                    {order.length > 0 ? (
                      <>
                        <OrderContents
                            order={order}
                            removeItem={removeItem}
                        />
                        <TipPercentageForm
                            setTip={setTip}
                            tip={tip}
                        />
                        <OrderTotals
                            tip={tip}
                            order={order}
                            placeOrder={placeOrder}
                        />
                      </>  
                    ) : <p className="text-center">La orden está vacía</p>}
                    
                </div>
            </main>
        </>
    )
}

export default App
