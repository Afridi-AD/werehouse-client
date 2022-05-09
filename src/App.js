import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Blog from './Components/Blog/Blog';
import Signup from './Components/Signup/Signup';
import ManageItem from './Components/ManageItem/ManageItem';
import RequirAuth from './Components/RequirAuth/RequirAuth';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import ManageInventory from './Components/ManageInventory/ManageInventory';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/order' element={<Order></Order>}></Route> */}
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/update' element={<UpdateItem></UpdateItem>} ></Route>
        <Route path='/manageInventori' element={
          <RequirAuth>
            <ManageInventory></ManageInventory>
          </RequirAuth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manage' element={
          <RequirAuth>
            <ManageItem></ManageItem>
          </RequirAuth>
        } ></Route>

        <Route path='/addProduct' element={
          <RequirAuth>
            <Order></Order>
          </RequirAuth>
        } ></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
