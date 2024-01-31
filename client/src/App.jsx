import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import { DropdownProvider } from "./context/DropdownContext";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  let isAuthenticated = true;
  return (
    <DropdownProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </DropdownProvider>
  );
}

export default App;
