import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FinancialTips from './pages/FinancialTips';
import FAQs from './pages/FAQs';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Inventory from './pages/Inventory';

const App = () => {
  return (
    <Router>
      <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/financial-tips" element={<FinancialTips />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;