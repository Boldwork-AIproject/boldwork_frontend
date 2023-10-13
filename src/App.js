import React from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Navigation from "./Navigation.js";
import Main from "./pages/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupComplete from "./pages/SignupComplete";
import UploadCallSelect from "./pages/UploadCallSelect";
import UploadCallNew from "./pages/UploadCallNew";
import UploadCall from "./pages/UploadCall";
import CheckCall from "./pages/CheckCall";
import CustomerInfo from "./pages/CustomerInfo";
import CustomerInfoDetail from "./pages/CustomerInfoDetail";
import MyPage from "./pages/MyPage";
import CheckCallDetail from "./pages/CheckCallDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-complete" element={<SignupComplete />} />
          <Route path="/upload-call">
            <Route path="select" element={<UploadCallSelect />} />
            <Route path="new" element={<UploadCallNew />} />
            <Route index element={<UploadCall />} />
          </Route>
          <Route path="check-call">
            <Route index element={<CheckCall />} />
            <Route path=":id" element={<CheckCallDetail />} />
          </Route>
          <Route path="customer-info">
            <Route index element={<CustomerInfo />} />
            <Route path=":id" element={<CustomerInfoDetail />} />
          </Route>
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
