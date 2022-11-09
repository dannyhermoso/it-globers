import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Rain from './components/Rain/Rain';
import Puff from './components/Puff/Puff';
import Cart from './components/Cart/Cart';
import Nap from './components/Nap/Nap';
import Social from './components/Social/Social';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Banner />
          <Rain />
          <Puff />
          <Cart />
          <Nap />
          <Social />
          <Newsletter />
          <Footer />
    </div>
  );
}

export default App;
