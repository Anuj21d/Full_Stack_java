import React, { useEffect, useState } from "react";
import axios from "axios";
import GallerySection from "../components/GallerySection";
import PaginationSection from "../components/PaginationSection";
import GetImage from "../components/GetImage";

const App = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(2);
  const totalPages = 15;

  const getImages = async () => {
    try {
      const page = Math.max(1, Math.min(count, totalPages));
      if (page !== count) {
        setCount(page);
      }
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`,
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
      <GetImage images={images} />
    ) : (
      <p>Loading...</p>
    );

  return (
    <div className="bg-gradient-to-r from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] h-screen w-screen flex flex-col items-center justify-evenly gap-5">
      <h1 className="text-3xl font-bold text-[#475569]">
        Image Gallery
      </h1>
      <GallerySection printImage = {printImage}/>
      <PaginationSection
        count={count}
        setCount={setCount}
        setImages={setImages}
        totalPages={totalPages}
      />
    </div>
  );
};

export default App;
