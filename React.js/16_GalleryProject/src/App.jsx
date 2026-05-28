import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight, ChevronLeft } from "lucide-react";

const App = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const getImages = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${count}&limit=10`,
      );
      const data = await response.data;

      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    getImages();
  }, [count]);

  useEffect(() => {
    getImages();
  }, []);

  let printImage =
    images.length > 0 ? (
      <div className="w-full h-full flex flex-wrap justify-center gap-5">
        {images.map((image) => (
          <div
            className="relative bg-amber-100 p-1 rounded-4xl w-85 h-95 shadow-xl border border-amber-200"
            key={image.id}
          >
            <img
              className="h-full w-full object-cover rounded-4xl"
              src={image.download_url}
              alt={image.author}
            />
            <h2 className="text-shadow-lg/30 absolute top-0 left-0 p-5 text-white font-bold text-lg">
              Author Name : {image.author}
            </h2>
          </div>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    );

  return (
    <div className="bg-yellow-50 h-screen w-screen flex flex-col justify-between gap-5">
      <div className="flex flex-col justify-center items-center p-3 pb-2">
        <h1 className="text-3xl pb-4 font-bold text-shadow-lg/50 text-amber-600">
          Image Gallery
        </h1>
        <div>
          {printImage}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 pb-2">
        <button
          className="group p-3 rounded-full flex justify-center items-center border-2 border-amber-500/30 hover:bg-amber-900 transition-colors duration-100 active:bg-amber-900"
          onClick={() => {
            count > 1 ? setCount(count - 1) : setCount(1);
            setImages([]);
          }}
          style={{
            pointerEvents: count === 1 ? "none" : "auto",
            opacity: count === 1 ? 0.5 : 1,
          }}
        >
          <ChevronLeft
            size={16}
            className="text-black group-hover:text-white transition-colors duration-300 active:text-white"
          />
        </button>
        <h3>Page : {count}</h3>
        <button
          className="group p-3 rounded-full flex justify-center items-center border-2 border-amber-500/30 hover:bg-amber-900 transition-colors duration-100 active:bg-amber-900"
          onClick={() => {
            setCount(count + 1);
            setImages([]);
          }}
        >
          <ChevronRight
            size={16}
            className="text-black group-hover:text-white transition-colors duration-100 active:text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default App;
