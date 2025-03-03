import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/Login";
import SignupPage from "./Components/Signup/signup";
import Home from "./Components/Home/home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
