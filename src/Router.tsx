import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import SignUp from "../src/Screens/SignUp";
import LoginPage from "../src/Screens/LoginPage";
import ForgotPass from "../src/Screens/ForgotPass";
import CheckMail from "./Screens/CheckMail";
import SetPass from "./Screens/SetPass";
import PassReset from "./Screens/PassReset";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import PolicyPage from "./Screens/PolicyPage";
import Cookies from "./Screens/Cookies";
import Terms from "./Screens/Terms";
import FAQs from "./Screens/FAQs";
import HomePage from "./Screens/HomePage";
import Properties from "./Screens/Properties";
import Propertywithin from "./Screens/Propertywithin";
import Dashboard from "./Screens/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Wallet from "./Screens/Wallets";
import Beneficiaries from "./Screens/Beneficiaries";


const Router = () => {
  return (
    <BRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/Checkmail" element={<CheckMail />} />
        <Route path="/setpass" element={<SetPass />} />
        <Route path="/passreset" element={<PassReset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policypage" element={<PolicyPage />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertywithin" element={<Propertywithin />} />
        <Route path="" element={<DashboardLayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/Beneficiaries" element={<Beneficiaries />} />
        </Route>
      </Routes>
    </BRouter>
  );
};

export default Router;
