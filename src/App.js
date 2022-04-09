import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Register from './component/Register/Register';
import Service from './component/Service/Service';
import Order from './component/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/Order' element={<Order></Order>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={'Page Not Found'}></Route>
      </Routes>
    </div>
  );
}

export default App;
