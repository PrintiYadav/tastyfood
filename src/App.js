import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Home from './components/Home';
import Chefs from './components/Chefs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header1 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chefs' element={<Chefs />} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
