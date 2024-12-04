import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import productsData from "../../public/store/product.json";

interface Product {
  id: number;
  img1: string;
  img2: string;
  img3: string;
  productName: string;
  price: string;
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleCardClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="font-serif p-4 font-mono text-2xl sm:text-3xl font-normal tracking-wide text-center sm:text-left">
        MASKS FOR YOU
      </div>

      {/* Product Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 p-5 w-full">
          {products.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.img1}
              productName={product.productName}
              price={product.price}
              onClick={() => {
                handleCardClick(product.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
