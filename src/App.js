import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

import TestComponents from "./styledTest.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-complete" element={<SignupComplete />} />
          <Route path="/upload">
            <Route path="customer" element={<UploadCallSelect />} />
            <Route path="customer/existing" element={<UploadCallExisting />} />
            <Route index element={<UploadCall />} />
            <Route path="analysis" element={<Analysis />} />
          </Route>
          <Route path="check">
            <Route index element={<CheckCall />} />
            <Route path=":id" element={<Analysis />} />
          </Route>
          <Route path="info">
            <Route index element={<CustomerInfo />} />
            <Route path=":id" element={<CustomerInfoDetail />} />
          </Route>
          <Route path="mypage" element={<MyPage />} />
          <Route path="/test_components" element={<TestComponents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
