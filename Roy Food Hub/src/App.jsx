import Home from "./screens/Home"
import Login from "./screens/Login"
import './style.css'
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
          <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
          </div>
    </Router>
  )
}

export default App
