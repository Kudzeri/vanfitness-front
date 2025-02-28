import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app/globals.css";
import { createRoot } from "react-dom/client";
import Header from "./layout/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import { UserContextProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./pages/CreateProfile";
import EditProfile from "./pages/EditProfile";

createRoot(document.getElementById("root")).render(
  
    <Router>
      <UserContextProvider>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create-profile" element={<CreateProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
      </UserContextProvider>
    </Router>
);
