import axios from './axios.js';
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignupComplete from "./pages/SignupComplete";
import UploadCallSelect from "./pages/UploadCallSelect";
import UploadCallExisting from "./pages/UploadCallExisting";
import UploadCall from "./pages/UploadCall";
import CheckCall from "./pages/CheckCall";
import CustomerInfo from "./pages/CustomerInfo";
import CustomerInfoDetail from "./pages/CustomerInfoDetail";
import MyPage from "./pages/MyPage";
import Analysis from "./pages/Analysis";
import Loading from "./pages/Loading";
//import TestComponents from "./styledTest.js";

function App() {
  // get access token from cookie
  const tokenCookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('access_token='));

  // check if access token is present
  const [isLoggedIn, setIsLoggedIn] = useState(!!tokenCookie);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    axios.get('http://localhost:8000/logout', {
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => {
      // Handle the response if needed (e.g., display a confirmation message)
      console.log('Logout successful', response.data);
  
      // Delete the access token cookie and perform other logout-related tasks
      //Cookies.remove('access_token');
      setIsLoggedIn(false);
  
      // Redirect the user to the login page or any other desired page
      <Navigate to="/login" />
    })
    .catch((error) => {
      console.error('Logout failed', error);
      // Handle any errors that may occur during the logout process
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
            <Route path="complete" element={<SignupComplete />} />
          <Route path="/upload">
              <Route path="customer" element={isLoggedIn ? <UploadCallSelect /> : <Navigate to="/login" /> } />
              <Route path="customer/existing" element={isLoggedIn ? <UploadCallExisting /> : <Navigate to="/login" />} />
              <Route index element={isLoggedIn ? <UploadCall /> : <Navigate to="/login" />} />
              <Route path="analysis" element={isLoggedIn ? <Analysis /> : <Navigate to="/login" />} />
              <Route path="loading" element={isLoggedIn ? <Loading /> : <Navigate to="/login" />} />
          </Route>
          <Route path="check">
            <Route index element={isLoggedIn ? <CheckCall /> : <Navigate to="/login" />} />
            <Route path=":id" element={isLoggedIn ? <Analysis /> : <Navigate to="/login" />} />
          </Route>
          <Route path="info">
            <Route index element={isLoggedIn ? <CustomerInfo /> : <Navigate to="/login" />} />
            <Route path=":id" element={isLoggedIn ? <CustomerInfoDetail /> : <Navigate to="/login" />} />
          </Route>
          <Route path="mypage" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />} />
          {/*<Route path="/test_components" element={<TestComponents />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
