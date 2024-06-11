import React from "react";

const SectionTimeHeader = () => {
  return (
    <section className="relative py-32">
      <div className="m-auto grid grid-cols-2 text-center xl:w-[60%]">
        <div className="col-start-2 m-auto max-md:col-span-2 max-md:w-[70%] max-sm:w-[80%]">
          <h2 className="pb-5 text-[40px] xl:text-[44px]">Ưu Đãi Trong Ngày</h2>
          <div className="grid grid-cols-4 place-content-center place-items-center gap-5 px-6 py-3 font-['Montserrat'] text-[#555555]">
            <div className="grid h-24 w-24 grid-cols-1 place-content-center rounded bg-slate-100">
              <h3 className="font-bold">
                <strong>
                  <span>00</span>
                </strong>
              </h3>
              <p>Days</p>
            </div>
            <div className="grid h-24 w-24 grid-cols-1 place-content-center rounded bg-slate-100">
              <h3>
                <strong>
                  <span>00</span>
                </strong>
              </h3>
              <p>Hours</p>
            </div>
            <div className="grid h-24 w-24 grid-cols-1 place-content-center rounded bg-slate-100">
              <h3>
                <strong>
                  <span>00</span>
                </strong>
              </h3>
              <p>Minutes</p>
            </div>
            <div className="grid h-24 w-24 grid-cols-1 place-content-center rounded bg-slate-100">
              <h3>
                <strong>
                  <span>00</span>
                </strong>
              </h3>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[url('./src/images/counter.png')] bg-cover bg-center"></div>
    </section>
  );
};

export default SectionTimeHeader;
