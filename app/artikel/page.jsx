import React from "react";
import news from "../src/json/news.json";
import HomePage from "../page";

const Artikel = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl w-full space-y-8'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>News</h1>
        <div className='flex flex-wrap justify-center'>
          {news.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-md border-r-2 rounded-lg p-12 mb-8 mx-8 w-96'
            >
              <img
                src={item.img}
                alt={item.title}
                className='w-full mb-4 rounded-lg'
              />
              <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
              <p className='text-gray-800'>{item.description}</p>
              <p className='mt-12'>baca selengkapnya</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
