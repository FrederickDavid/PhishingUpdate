import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import OTPScreen from "./Auth/OTPScreen";
import Register from "./Auth/Register";
import AllUserPage from "./Screens/AllUserPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/otp" element={<OTPScreen />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allusersdata" element={<AllUserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
