import "./App.scss";
import Navigation from "./components/Header/Navigation";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Shades-Categories/Categories"

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Categories/>
    </div>
  );
}

export default App;
