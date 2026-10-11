import { BrowserRouter, Routes, Route } from "react-router-dom";  
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/login"
          element={
            <div>
              <h1>Login Page Coming Soon</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
