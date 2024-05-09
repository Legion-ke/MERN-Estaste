import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Profile from "./Pages/Profile"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={Home}/>
          <Route />
          <Route path="/sign-up" element={SignUp}/>
          <Route path="/About" element={About}/>
          <Route path="/Profile" element={Profile}/>
          

      </Routes>
    </BrowserRouter>
  )
}