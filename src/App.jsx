import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Tienda de Sneakers"} />
    </div>
  );
}

export default App;
