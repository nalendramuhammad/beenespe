import Image from "next/image";

const CarCard = ({
  id,
  name,
  img,
  description,
  powerTorque,
  engine,
  price,
}) => {
  return (
    <div className='w-80 cursor-pointer mb-10 h-1/2'>
      <Image
        className='brightness-95'
        width={400}
        height={400}
        src={`/producsPage/${img}`}
        alt={name}
      />
      <h2 className='xl:text-xl text-base font-semibold mt-5'>{name}</h2>
      <p className='text-sm xl:text-base text-gray-600 pb-2'>{description}</p>
      <p className='text-sm xl:text-base text-gray-600 pb-2'>{price}</p>
    </div>
  );
};

export default CarCard;
