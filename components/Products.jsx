import CarCard from "@/components/CarCard";
import carData from "../app/src/json/carData.json";

export const metadata = {
  title: "products - page",
  description: "showing brabus products",
};

const Products = () => {
  return (
    <div>
      <section>
        <h2 className='mt-20 text-center text-2xl xl:text-4xl  font-semibold'>
          Produk Kami
        </h2>
        <div className='mx-auto my-20 w-[80%] flex flex-row flex-wrap justify-center gap-10 '>
          {carData.map((item) => (
            <CarCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              price={item.price}
              powerTorque={item.power_torque}
              engine={item.engine}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
