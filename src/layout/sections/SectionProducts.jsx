import React from "react";
import ProductItem from "../../component/ProductItem";
import productData from "../../productsData.json";

const SectionProducts = () => {
  return (
    <section id="products" className="relative pb-40 pt-24">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-2] bg-[url('./src/images/wedding.png')] bg-cover bg-center"></div>

      <div className="m-auto text-center md:w-[80%] lg:w-[60%]">
        <h2 className="mb-12 text-[50px] font-light">Bó hoa đẹp</h2>

        <ul className="mb-10 grid grid-cols-4 place-items-center gap-5 text-center max-md:grid-cols-1">
          {productData.map((item, index) => (
            <ProductItem
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
              rate={item.rate}
            />
          ))}
        </ul>

        <span className="uppercase hover:cursor-pointer">xem tất cả</span>
      </div>
    </section>
  );
};

export default SectionProducts;
