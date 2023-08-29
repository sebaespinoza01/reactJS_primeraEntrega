import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer  />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App
