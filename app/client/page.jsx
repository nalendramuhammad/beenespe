import React from "react";
import klien from "../src/json/client.json";

const client = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center ml-32'>
      {/* <div className='rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2'>
          <Image src='/client1.jpg' width={300} height={300} />
        </div> */}
      <div className='max-w-7xl w-full space-y-8'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>Klien kami</h1>
        <div className='flex flex-wrap justify-center gap-10'>
          {klien.map((image) => (
            <div
              key={image.id}
              className='rounded-lg cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2 w-96 '
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

export default client;
