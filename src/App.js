import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Navigation from './Components/UI Elements/Navigation';
import Gallery from './Components/Pages/Gallery';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
