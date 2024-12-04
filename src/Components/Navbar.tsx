import { useEffect, useState } from "react";
import { IoBagCheckOutline, IoPersonCircle, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

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
            setUserName(data.username);
          }
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30  firefox:bg-opacity-90">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 py-3 md:px-10 md:py-4">
        {/* Brand */}
        <div
          className="font-mono text-lg md:text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/landing")}
        >
          MASKCRAFT
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex gap-6 items-center">
          <div
            onClick={() => navigate("/shop")}
            className="hover:text-sky-700 cursor-pointer"
          >
            Shop
          </div>
          <div
            onClick={() => navigate("/faq")}
            className="hover:text-sky-700 cursor-pointer"
          >
            FAQ
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="hover:text-sky-700 cursor-pointer"
          >
            Contact
          </div>
          <div
            className="flex gap-2 items-center hover:text-sky-700 cursor-pointer"
            onClick={() => navigate(userName ? "/profile/personalInfo" : "/signin")}
          >
            <IoPersonCircle size={25} />
            {userName ? <div>{userName}</div> : <div>Login</div>}
          </div>
          <div
            onClick={() => navigate("/profile/cart")}
            className="hover:text-sky-700 cursor-pointer"
          >
            <IoBagCheckOutline size={22} />
          </div>
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {menuOpen && (
        <div className="flex flex-col items-start px-4 py-2 bg-white border-t border-gray-200 md:hidden">
          <div
            onClick={() => {
              navigate("/shop");
              setMenuOpen(false);
            }}
            className="w-full py-2 hover:text-sky-700 cursor-pointer"
          >
            Shop
          </div>
          <div
            onClick={() => {
              navigate("/faq");
              setMenuOpen(false);
            }}
            className="w-full py-2 hover:text-sky-700 cursor-pointer"
          >
            FAQ
          </div>
          <div
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className="w-full py-2 hover:text-sky-700 cursor-pointer"
          >
            Contact
          </div>
          <div
            onClick={() => {
              navigate(userName ? "/profile/personalInfo" : "/signin");
              setMenuOpen(false);
            }}
            className="w-full py-2 flex gap-2 items-center hover:text-sky-700 cursor-pointer"
          >
            <IoPersonCircle size={25} />
            {userName ? <div>{userName}</div> : <div>Login</div>}
          </div>
          <div
            onClick={() => {
              navigate("/profile/cart");
              setMenuOpen(false);
            }}
            className="w-full py-2 hover:text-sky-700 cursor-pointer"
          >
            <IoBagCheckOutline size={22} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
