import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("team") ;
    window.location.href = "/signin";
  }
  return (
    <div className="">
      <div className="bg-white shadow-2xl lg:flex md:w-80 md:flex-col hidden">
        <div className="flex-col pt-5 flex overflow-y-auto">
          <div className="flex-col justify-between px-4 flex h-[560px]">
            <div className="space-y-4">
              <div className="bg-top bg-cover space-y-1">
                <a
                  onClick={() => navigate("/profile/personalInfo")}
                  className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                >
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex"></span>
                    </span>
                  </span>
                  <span className="font-semibold text-lg">
                    Personal Information
                  </span>
                </a>

                <a
                  onClick={() => navigate("/profile/myOrders")}
                  className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                >
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex"></span>
                    </span>
                  </span>
                  <span className="font-semibold text-lg">My Orders</span>
                </a>

                <a
                  onClick={() => navigate("/profile/cart")}
                  className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                >
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex"></span>
                    </span>
                  </span>
                  <span className="font-semibold text-lg">Cart</span>
                </a>

                <a
                  href="#"
                  className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                >
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex"></span>
                    </span>
                  </span>
                  <span className="font-semibold text-lg" onClick={logout}>
                    Logout
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-12 pb-4">
              <div className="bg-top bg-cover space-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
