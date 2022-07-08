import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Order from './pages/Order';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
