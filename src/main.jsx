import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app/globals.css';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Main from './pages/Main';
import About from './pages/About';
import AuthPage from './pages/AuthPage';

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <div className="container mx-auto p-6">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
      </Routes>
    </div>
  </Router>
);
