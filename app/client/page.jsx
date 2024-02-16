import Image from "next/image";

const client = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center ml-32'>
      <div className='text-black mb-4'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>Klien Kami</h2>
      </div>
      <div className='flex flex-wrap gap-10 max-w-7xl w-full justify-center'>
        <div className='rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2'>
          <Image src='/client1.jpg' width={300} height={300} />
        </div>
        <div className='rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2'>
          <Image src='/client2.jpg' width={300} height={300} />
        </div>
        <div className='rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2'>
          <Image src='/suzuki.png' width={300} height={300} />
        </div>
        <div className='rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2'>
          <Image src='/client5.png' width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default client;
