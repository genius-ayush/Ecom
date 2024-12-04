import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Register from './Components/Register';
import SignIn from './Components/Signin';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Product from './Components/Product';
import Profile from './Components/Profile';
import { useEffect, useState } from 'react';

function App() {
  type Team = "mi" | "csk" | "rcb" | "kkr" | "dc" | "srh" | "rr" | "lsg" | "gt" | "pxi";

  const teamClasses: Record<Team, string> = {
    mi: "bg-mi-primary",
    csk: "bg-csk-primary",
    rcb: "bg-rcb-primary",
    kkr: "bg-kkr-primary",
    dc: "bg-dc-primary",
    srh: "bg-srh-primary",
    rr: "bg-rr-primary",
    lsg: "bg-lsg-primary",
    gt: "bg-gt-primary",
    pxi: "bg-pxi-primary",
  };

  // State for the current team
  const [team, setTeam] = useState<Team>(() => {
    // Initialize from localStorage or default to "mi"
    const storedTeam = localStorage.getItem("team") as Team | null;
    return storedTeam && storedTeam in teamClasses ? storedTeam : "mi";
  });

  const token = localStorage.getItem("token") ; 

  // Effect to sync `team` with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("team", team);
    console.log("rendered inside useeffect")
  }, [team , token]);

 

  // Compute the CSS class for the current team
  const teamClass = teamClasses[team];

  // Example handler to change the team
  const handleTeamChange = (newTeam: Team) => {
    setTeam(newTeam);
  };

  return (
    <div className={`${teamClass} min-h-screen`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/landing' element={<Landing />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile/*' element={<Profile />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </Router>

      {/* Example UI for changing team */}
      <div className="p-4">
        <h1>Select Team:</h1>
        <div className="flex gap-2">
          {Object.keys(teamClasses).map((teamKey) => (
            <button
              key={teamKey}
              onClick={() => handleTeamChange(teamKey as Team)}
              className="px-4 py-2 border rounded"
            >
              {teamKey.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
