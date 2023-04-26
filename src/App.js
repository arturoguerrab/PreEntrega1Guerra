import {BrowserRouter, Route, Routes} from "react-router-dom"

import CartContextProvider from "./context/CartContext";

import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";
import ErrorNotFound from "./components/Error404/ErrorNotFound";


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
            <Route path="*" element={<ErrorNotFound/>}/>
          </Routes>
        </Layout>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
