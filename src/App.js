import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  const onAdd = (cantidad) => {
    console.log(`Se agrego al carrito ${cantidad} elementos`);
  };

  let stock = 5;
  let initial = 1;

  return (
    <div>
      <Footer>
        <Navbar />
        <ItemListContainer />
        {/*<ProductCard
          title={title}
          precio={200}
          isRed={false}
          inicoCuenta={login}
  />*/}
        {/*<ItemCount stock={stock} initial={initial} onAdd={onAdd} />*/}
      </Footer>
    </div>
  );
}

export default App;
