import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
