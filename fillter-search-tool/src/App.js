import "./App.css";
import SearchBar from "./components/SearchBar";
import Bookdata from "./Data.json";
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book name...." data={Bookdata} />
    </div>
  );
}

export default App;
