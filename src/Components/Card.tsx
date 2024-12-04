interface CardProps {
    productName: string;
    imageUrl: string;
    price: string;
    onClick : () => void ;
}

function Card({ productName, imageUrl, price , onClick  }: CardProps) {
    return (
        <div className="">
            <div className="max-w-96 p-3  rounded overflow-hidden shadow-xl justify-items-center">
                <div className="">
                <img className="object-cover h-full w-full rounded-lg shadow-lg" src={imageUrl} alt="Sunset in the mountains" />
                </div>
                <div className="px-6 py-4 flex gap-9 items-center">
                    <div className="text-xl mb-2">{productName}</div>
                    <p className="">
                        {price}
                    </p>
                </div>

                <button className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 font-bold focus:shadow-none active:scale-100 w-80 h-10 rounded-xl" onClick={onClick}>Buy Now </button>
            </div>
        </div>
    )
}

export default Card