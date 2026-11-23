
import Banner from "../components/Banner/Banner.jsx"
import Colecoes from "../components/Colecoes/Colecoes.jsx"
import ProdutosDestaque from "../components/ProdutosDestaques/ProdutosDestaque.jsx"
import Ofertas from "../components/Ofertas/Ofertas.jsx"

const Home = () => {
    return ( 
        <>
            <Banner/>
            <Colecoes/>
            <ProdutosDestaque/>
            <Ofertas />
        </>
     );
}
 
export default Home;