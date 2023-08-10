import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return(
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola Mundo!!" />
    </div>
  )
}

export default App
