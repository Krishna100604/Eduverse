import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import ContactUs from "./components/Contact/Contact";
import AboutUs from "./components/About/About";

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/dashboard";

  return (
    <div className="bg-gray-100 min-h-screen">
      {showNavbar && <Navbar />}
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
      {showNavbar && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
