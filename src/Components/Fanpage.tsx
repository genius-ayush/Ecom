import axios from "axios";
import { useEffect, useState } from "react";


function Fanpage() {
    const [team, setTeam] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    const isLoggedIn = !!localStorage.getItem("token");
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (token) {
              const response = await axios.get("http://localhost:3000/auth/me", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
    
              const data = response.data;
    
              if (data.username) {
                setTeam(data.team);
              }
            }
          } catch (err) {
            console.error("Error fetching data: ", err);
          }
        };
    
        fetchData();
      }, [token]);
  return (
    <>
    {isLoggedIn && 
    <div className="text-center p-4 flex items-center justify-center gap-5 text-xl">
        Welcome to the fanpage of {team} 
        <img src={`/teams/${team}.png`} alt="" className="h-10 w-14" />
    </div>}
    </>
  )
}

export default Fanpage