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
  type Team = "mi" | "csk" | "rcb" | "kkr" | "dc" | "srh" | "rr" | "lsg" | "gt" | "pxi" | "default";

  const teamClasses: Record<Team, string> = {
    default: "",
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

  const [team, setTeam] = useState<Team>(() => {
    const storedTeam = localStorage.getItem("team") as Team | null;
    return storedTeam && storedTeam in teamClasses ? storedTeam : "default";
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    localStorage.setItem("team", team);
  }, [team, token]);

  const teamClass = teamClasses[team];

  const handleTeamChange = (newTeam: Team) => {
    setTeam(newTeam);
  };

  return (
    <div className={`${teamClass} min-h-screen`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
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

      <div className="p-4">
        <h1 className="text-lg font-bold text-center md:text-2xl lg:text-3xl">Select Team:</h1>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {Object.keys(teamClasses).map((teamKey) => (
            <button
              key={teamKey}
              onClick={() => handleTeamChange(teamKey as Team)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border rounded md:px-6 md:py-3 lg:text-base hover:bg-blue-700 transition"
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
