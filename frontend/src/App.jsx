import {Route, Routes, BrowserRouter} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import SignupPage from "./pages/SignupPage"
import DashBoardPage from "./pages/DashBoardPage"
import { AuthProvider } from "../context/AuthContext"

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/dashboard" element={<DashBoardPage />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
