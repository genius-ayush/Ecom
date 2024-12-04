import Cart from "./Cart";
import MyOrders from "./MyOrders";
import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";
import { Routes, Route } from 'react-router-dom';

function Profile() {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Routes>
        <Route path="personalInfo" element={<PersonalInfo />} />
        <Route path="myOrders" element={<MyOrders />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Profile;
