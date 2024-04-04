import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/login'
import Dashboard from './components/dashboard'
import UserProviders from './components/providers'

function App() {
  return (
    <>
      <UserProviders>
        <Router>
          <div className="App">
            <Routes>
                <Route exact path="/" element={<Login/>}>
                </Route>
                <Route path="/dashboard" element={<Dashboard/>}>
                </Route>
              </Routes>
          </div>
        </Router>
      </UserProviders>
    </>
  )
}

export default App
