import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom"
import CartProvider from "./context/CartProvider";
import Checkout from "./components/Checkout"

function App() {
  return(
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer  />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />}  />
      </Routes>
    </CartProvider>
  )
}

export default App
