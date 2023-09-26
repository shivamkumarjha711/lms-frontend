import './App.css';
import React, { Fragment } from 'react';
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Course/CourseDescription';
import RequireAuth from './Components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import CheckoutFail from './Pages/Payment/CheckoutFail';
import Displaylecture from './Pages/Dashboard/Displaylecture';
import Addlecture from './Pages/Dashboard/Addlecture';

function App() {

  return (
    <Fragment>
     <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/courses' element={<CourseList />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/denied' element={<Denied />}></Route>

        <Route path='/course/description/' element={<CourseDescription />}></Route>

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path='/course/create' element={<CreateCourse />}></Route>
          <Route path='/course/addlecture' element={<Addlecture />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />}></Route>
          <Route path='/user/editprofile' element={<EditProfile />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/checkout/success' element={<CheckoutSuccess />}></Route>
          <Route path='/checkout/fail' element={<CheckoutFail />}></Route>
          <Route path='/course/displaylectures' element={<Displaylecture />}></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
