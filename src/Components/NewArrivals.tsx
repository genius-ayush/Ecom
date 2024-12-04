import { LiaShippingFastSolid } from "react-icons/lia";
import { GiRun } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";

function NewArrivals() {
  return (
    <div className="flex justify-center p-5 gap-40 border-t border-b border-gray-300 mb-3 ">
      <div className="flex flex-col items-center">
        <LiaShippingFastSolid size={40} />
        <div className="mt-2">Free Shipping</div>
      </div>

      <div className="flex flex-col items-center">
        <GiReturnArrow size={40} />
        <p className="mt-2">Return within 15 days</p>
      </div>

      <div className="flex flex-col items-center">
        <GiRun size={40} />
        <p className="mt-2">Express Delivery in store mode</p>
      </div>
    </div>
  );
}

export default NewArrivals;
