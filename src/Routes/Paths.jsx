import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdutosView from '../pages/ProductViewPage.jsx'
import Produtos from '../pages/ProductListingPage.jsx'
import Home from '../pages/Home.jsx'
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Paths = () => {
    return ( 
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/produtos" element={<Produtos />}/>
                        <Route path="/produtos/:id" element={<ProdutosView />}/>
                    </Routes>
                <Footer />    
            </BrowserRouter>
     );
}
 
export default Paths;