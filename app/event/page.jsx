import React from "react";
import events from "../src/json/events.json";

const Event = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl w-full space-y-8'>
        {" "}
        {/* Menggunakan max-w-7xl untuk lebar maksimum */}
        <h1 className='text-3xl font-semibold mb-4 text-center'>Events</h1>
        <div className='flex flex-wrap justify-center'>
          {" "}
          {events.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-md rounded-lg p-12 mb-8 mx-8 w-96'
            >
              <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
              <p className='text-gray-600 mb-2'>Date: {item.date}</p>
              <p className='text-gray-600 mb-2'>Location: {item.location}</p>
              <p className='text-gray-800'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
