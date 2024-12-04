function MyOrders() {
  return (
    <div className="p-5">
      <div className="text-xl font-semibold pb-5 ">My Orders</div>
      <ul className="w-96 text-surface dark:text-white">
        
        
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          <div className="flex justify-between  ">
            <img
              src="./public/store/shop/p2/img1.jpg"
              className="h-14 "
              alt=""
            />
            <div className="font-semibold">Grey Mask</div>
            <div className="font-semibold">100₹</div>
            <div className="font-semibold">Delivery on 10/10/10</div>
          </div>
        </li>
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          <div className="flex justify-between">
            <img
              src="./public/store/shop/p4/img1.jpg"
              className="h-14"
              alt=""
            />
            <div className="font-semibold">Grey Mask</div>
            <div className="font-semibold">100₹</div>
            <div className="font-semibold">Delivery on 10/10/10</div>
          </div>
        </li>
        <li className="w-full py-4">
          <div className="flex justify-between">
            <img
              src="./public/store/shop/p1/img1.jpg"
              className="h-14 "
              alt=""
            />
            <div className="font-semibold">Grey Mask</div>
            <div className="font-semibold">100₹</div>
            <div className="font-semibold">Delivery on 10/10/10</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MyOrders;
