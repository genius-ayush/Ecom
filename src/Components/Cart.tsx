
function Cart() {
  return (
    <div>
      <div className="font-bold text-2xl mb-5 pt-3">Cart</div>
      <div className="w-[500px] h-44 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 flex space-x-10">
          <div className=" mb-2">
            <img
              src="/store/shop/p2/img1.jpg"
              className="h-24"
              alt=""
            />
          </div>

          <div className="gap-2">
            <div className="font-semibold text-xl">Grey Mask</div>
            <div>Price 120₹</div>

            <div className="flex gap-5 mt-7">
            <div className="w-20 h-10 rounded overflow-hidden bg-black text-white content-center p-2 shadow-xl    ">
              Remove
            </div>
            <div className="w-30 h-10 rounded overflow-hidden bg-white text-black content-center p-2 shadow-xl">
              Place Order
            </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
}

export default Cart;
