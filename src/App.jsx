import "./css/main.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import NotFound from "./components/NotFound";
import { ItemListContainer } from "./components/ItemListContainer";
import productos from './data/productos.json'
import ItemDetailContainer from "./components/ItemDetailConteiner";
import Footer from "./components/Footer";

function App() {

  const [numerito, setNumerito] = useState(1);

  return (
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route exact path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App