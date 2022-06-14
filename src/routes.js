import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProsuctShopPage from "./pages/ProsuctShopPage";
import Regeter from "./pages/Regester";
import ShopCart from "./pages/ShopCart";
import SingIn from "./pages/SingIn";

function RoutesCom() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/regester" element={<Regeter/>}/>
                <Route path="/sing-in" element={<SingIn/>}/>
                <Route path="/product" element={<ProsuctShopPage/>}/>
                <Route path="/shop-cart" element={<ShopCart/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default RoutesCom;