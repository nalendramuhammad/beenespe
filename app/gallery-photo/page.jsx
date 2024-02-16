import React from "react";
import img from "../src/json/img.json";

const Gallery = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl w-full space-y-8'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>Gallerys</h1>
        <div className='flex flex-wrap justify-center'>
          {img.map((image) => (
            <div
              key={image.id}
              className='bg-white shadow-md rounded-lg p-4 mb-8 ml-6 w-96'
            >
              <img
                src={image.imgUrl}
                alt={image.title}
                className='w-full rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
