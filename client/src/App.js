import './App.css';
import Header from './Components/Header'
import BookDetails from './Components/bookDetails'
import Home from './Components/Home'
import BookCard from './Components/bookCard'
import Card from './Components/Card'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemporaryDrawer from './Components/jjj'
import Nav from './Components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <TemporaryDrawer/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Details" element={<BookDetails />} />
        <Route path="/store" element={<Card />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
