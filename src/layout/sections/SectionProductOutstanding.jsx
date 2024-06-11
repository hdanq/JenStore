import React, { useState } from "react";
import Link from "../../component/Link";
import ProductItem from "../../component/ProductItem";
import productData from "../../productsData.json";

const SectionProductOutstanding = () => {
  return (
    <section className="pb-10 text-center">
      <div className="m-auto grid grid-cols-2 place-items-center gap-10 px-10 text-center max-md:grid-cols-1 xl:w-[60%]">
        <div className="relative">
          <img src="./src/images/collection.png" alt="" />
          <div className="absolute right-[30%] top-[30%]">
            <h4 className="text-[20px] font-normal uppercase">
              Teachers' Days
            </h4>
            <h2 className="mb-10 text-[50px] font-light max-xl:text-[40px]">
              Sale 30%
            </h2>
            <Link class="px-6 py-2" />
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {productData.map((item) =>
            item.rate === 5 ? (
              <ProductItem
                key={item.name}
                name={item.name}
                img={item.img}
                price={item.price}
                rate={item.rate}
              />
            ) : (
              ""
            ),
          )}
        </ul>
      </div>
      <span className="uppercase hover:cursor-pointer">Xem tất cả</span>
    </section>
  );
};

export default SectionProductOutstanding;
