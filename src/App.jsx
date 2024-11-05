import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import UserDashboard from './pages/UserDashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';
import VerifyEmail from './pages/VerifyEmail';
import ForgetPassword from './pages/ForgetPassword';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import Chathelp from './pages/ChatHelp';

const AppContent = () => {
  const location = useLocation();

  // Define paths where NavBar, Footer, and Chathelp should be hidden
  const hideNavFooterPaths = ['/SignUp', '/Login', '/ForgotPassword', '/UserDashboard', '/AdminDashboard'];
  const hideChatHelpPaths = ['/UserDashboard', '/AdminDashboard'];

  const shouldHideNavFooter = hideNavFooterPaths.includes(location.pathname);
  const shouldHideChatHelp = hideChatHelpPaths.includes(location.pathname);

  return (
    <div className="app">
      {/* Conditionally render NavBar and Footer */}
      {!shouldHideNavFooter && <NavBar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/ForgotPassword" element={<ForgetPassword />} /> {/* Forgot password route */}
      </Routes>

      {/* Conditionally render Chathelp */}
      {!shouldHideChatHelp && <Chathelp />}

      {!shouldHideNavFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
