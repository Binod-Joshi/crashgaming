import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./common/Navbar";
import CreateForm from "./pages/forms/CreateForm";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (data) => {
    setShowForm(data)
  }

  return (
    <>
      <Router>
        <div style={{ filter: showForm ? "blur(5px)" : "none" }}>
        <Navbar handleShowForm = {handleShowForm}/>
        <Dashboard />
        </div>
        {showForm && <CreateForm handleShowForm={handleShowForm}/>}
      </Router>
    </>
  );
}

export default App;
