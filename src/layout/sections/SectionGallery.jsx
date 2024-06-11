import React from "react";
import Link from "../../component/Link";

const SectionGallery = () => {
  return (
    <section id="gallery_item" className="mt-7 h-full px-10">
      <div className="grid grid-cols-6 place-content-between gap-10">
        <div className="relative col-span-6 text-end xl:col-span-4">
          <a href="#">
            <img
              className="h-full w-full"
              src="./src/images/homev3ashowaimage1.png"
              alt=""
            />
          </a>
          <div className="absolute right-[10%] top-[30%]">
            <h2 className="lg:text-[36px] xl:text-[48px]">
              Happy
              <br />
              Women's Day
            </h2>
            <h4 className="mb-7 text-xl font-normal uppercase">
              Sale up to 20%
            </h4>
            <Link class="px-8 py-3" />
          </div>
        </div>
        <div className="col-span-6 h-full w-full place-self-center bg-[#232122] px-5 lg:rounded xl:col-span-2">
          <a href="#">
            <img
              className="h-full w-full"
              src="./src/images/homev3ashowaimage3.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
