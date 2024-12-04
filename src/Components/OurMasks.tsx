function OurMasks() {
  return (
    <div>
      <div className="font-mono text-3xl font-medium flex items-center justify-center p-8 mt-9">
        Our Masks
      </div>
      <div className="flex justify-center gap-5">
        <div style={{backgroundColor:"rgb(220,233,245)"}} className=" w-96 h-96 flex items-center justify-center ">
          <img src="/store/OurMasks/img1.jpeg" alt="" className=" w-80 h-80 " />
        </div>

        <div style={{backgroundColor:"rgb(254,156,122)"}} className=" w-96 h-96 flex items-center justify-center">
          <img src="/store/OurMasks/img2.webp" alt="" className="w-80 h-80" />
        </div>

        <div style={{backgroundColor:"rgb(220,233,245)"}} className= "w-96 h-96 flex items-center justify-center">
          <img src="/store/OurMasks/img3.avif" alt="" className="w-80 h-80" />
        </div>
      </div>
    </div>
  );
}

export default OurMasks;
