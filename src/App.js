import Input from "./Input";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import {Routes,Route} from "react-router-dom";





function App() {
  return (
    <>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Input/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
    </Routes>
    


    </>
  );
}

export default App;
