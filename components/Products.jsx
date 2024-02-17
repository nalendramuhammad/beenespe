import ProdCard from "@/components/ProdCard";
import prodData from "../app/src/json/prodData.json";

const Products = () => {
  // Memisahkan data jaket dan aksesoris
  const jackets = prodData.filter((item) => item.category === "jacket");
  const accessories = prodData.filter((item) => item.category === "accessory");

  return (
    <div>
      <section>
        <h2 className='mt-20 text-center text-2xl xl:text-4xl  font-semibold'>
          Jacket
        </h2>
        <div className='mx-auto my-20 w-[80%] flex flex-row flex-wrap justify-center gap-10 '>
          {jackets.map((item) => (
            <ProdCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className='mt-20 text-center text-2xl xl:text-4xl  font-semibold'>
          Aksesoris
        </h2>
        <div className='mx-auto my-20 w-[80%] flex flex-row flex-wrap justify-center gap-10 '>
          {accessories.map((item) => (
            <ProdCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
