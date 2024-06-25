import './App.css'
import { BrowserRouter as Router,} from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Navbar from './common/Navbar';

function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Dashboard/>
    </Router>
      
    </>
  )
}

export default App
