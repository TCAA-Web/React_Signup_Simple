import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
