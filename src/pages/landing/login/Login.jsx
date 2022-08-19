import React from "react";
import MenuTop from "../../../component/menuTop/MenuTop";
import Footer from "../../../component/footer/Footer";
import Faq from "../../../component/faq/Faq";
import FormLogin from "../../../component/formLogin/FormLogin";
import { Routes, Route } from "react-router-dom";
import "./login.css";
import FormRegister from "../../../component/formRegister/FormRegister";

export default function Login() {
  return (
    <div>
      <MenuTop />
      <Routes>
        <Route exact path="/" element={<FormLogin />} />
        <Route exact path="/register" element={<FormRegister />} />
      </Routes>
      <Faq />
      <Footer />
    </div>
  );
}
