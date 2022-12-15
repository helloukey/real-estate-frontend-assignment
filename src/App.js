import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Listing from "./components/Listing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Listing />
      <Footer />
    </div>
  );
}

export default App;
