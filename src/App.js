import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import CartContextProvider from "./context/CartContext";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CheckoutContainer/>}/>
          </Routes>
        </Layout>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
