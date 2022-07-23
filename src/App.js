import React, { createContext, useState } from "react";
import './App.css';
import Home from './components/Home/Home/Home';

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import Order from "./components/Home/Dashboard/Order/Order";
import Orderlist from "./components/Home/Dashboard/Orderlist/Orderlist";
import Reviews from "./components/Home/Dashboard/Reviews/Reviews";
import MakeAdmin from "./components/Home/Dashboard/MakeAdmin/MakeAdmin";
import AddService from "./components/Home/Dashboard/AddService/AddService";
import ManageService from "./components/Home/Dashboard/ManageService/ManageService";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddServices from "./components/Home/Dashboard/AddServices/AddServices";
import DeleteServices from "./components/Home/Dashboard/DeleteServices/DeleteServices";
import AddRiview from "./components/Home/Dashboard/AddReview/AddRiview";
import CustomerReviews from "./components/Home/CustomerReviews/CustomerReviews";
import Service from "./components/Home/Service/Service";
import Navbar from "./components/Home/Navbar/Navbar";
import Register from "./components/Register/Register";
import AuthProvider from './contexts/AuthProvider/AuthProvider.js'
import Payment from "./components/Home/Payment/Payment";
import AdminRoute from "./components/Login/AdminRoute/AdminRoute";
function App() {
  
  return (

      <AuthProvider>
        <BrowserRouter>
      <Routes>
      <Route path="/" element={  <Home />}>
        </Route>
      <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/register" element={<Register></Register>}>
        </Route>
       <Route path="/dashboard" element={
        <PrivateRoute >
        <Dashboard/>
        </PrivateRoute>
       }>
       </Route>
       <Route  path="/order/:name" element={ <PrivateRoute>
          <Order/>
        </PrivateRoute>}>
       </Route>
        <Route path="/orderlist" element={ <Orderlist/>}>
        </Route>
        <Route path="/reviews" element={ <Reviews></Reviews>}>
        </Route>
        <Route path="/makeadmin" element={ <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute> }>
        </Route>
        <Route path="/addservice" element={<AddService></AddService>}>
        </Route>
        <Route path="/manageservice" element={ <ManageService></ManageService>}>
        </Route>
        <Route path={`/payment/:orderId`} element={<Payment></Payment>}></Route>
      </Routes>
  </BrowserRouter>
      </AuthProvider>
);
}

export default App;