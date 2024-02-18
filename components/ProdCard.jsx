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
        className='brightness-95 h-96'
        width={400}
        height={400}
        src={`/producsPage/${img}`}
        alt={name}
      />
      <h2 className='xl:text-xl text-base font-semibold mt-5'>{name}</h2>
      <p className='text-sm xl:text-base text-gray-600 pb-2'>{description}</p>
      <p className='text-sm xl:text-base text-gray-600 pb-2'>{price}</p>
      <div
        className='text-sm xl:text-base text-gray-600 pb-2 flex items-center'
        href='https://wa.me/6281328732245'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/wa.png' alt='WhatsApp' width={30} height={30} />{" "}
        <p>beli produk ini</p>
      </div>
    </div>
  );
};

export default CarCard;
