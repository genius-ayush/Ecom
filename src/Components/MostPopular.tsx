import Card from "./Card";
import { useNavigate } from "react-router-dom";

function MostPopular() {
  const navigate = useNavigate();

  const handleCardClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="p-4">
      <div className="font-mono text-3xl font-medium flex items-center justify-center p-4 mt-6">
        Most Popular
      </div>
      <div className="flex flex-wrap gap-8 justify-center pb-10">
        <Card
          imageUrl="/store/shop/p1/img1.jpg"
          productName="Yellow Mask"
          price="$5.00"
          onClick={() => handleCardClick(1)}
        />
        <Card
          imageUrl="/store/shop/p5/img1.jpg"
          productName="Black Mask"
          price="$3.00"
          onClick={() => handleCardClick(5)}
        />
        <Card
          imageUrl="/store/shop/p3/img1.jpg"
          productName="Maroon Mask"
          price="$2.00"
          onClick={() => handleCardClick(3)}
        />
        <Card
          imageUrl="/store/shop/p12/img1.jpg"
          productName="Light Color Mask"
          price="$10.00"
          onClick={() => handleCardClick(12)}
        />
      </div>
      <div className="flex justify-center mb-10">
        <button
          type="button"
          className="text-white bg-black hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-gray-300 font-extrabold rounded-lg text-sm px-8 md:px-20 py-4 mb-2"
          onClick={() => navigate("/shop")}
        >
          Go to shop
        </button>
      </div>
    </div>
  );
}

export default MostPopular;
