import React, { useState, useEffect } from "react";
import Link from "../../component/Link";

const HeaderSub = (props) => {
  return (
    <>
      <h4
        className={
          "text-xl font-medium uppercase text-[#495057] sm:text-base " +
          props.class
        }
      >
        {props.titleSub}
      </h4>
    </>
  );
};

const HeaderMain = (props) => {
  return (
    <>
      <h1
        className={
          "bg-[url('https://slimweb.vn/site/cuahangbanhoa/images/17245/bgatitle.jpg')] bg-clip-text bg-no-repeat text-[70px] font-thin leading-tight text-transparent xl:text-[100px] " +
          props.class
        }
      >
        {props.titleMain}
      </h1>
    </>
  );
};

const Header = () => {
  const [slide, setSlide] = useState(0);

  const gotoSlide = (slide) => {
    const slides = document.querySelectorAll(".slider");

    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
      console.log(slide);
      gotoSlide(slide);
    }, 5000); // Thay đổi slide mỗi 5 giây

    return () => clearInterval(interval); // Hủy đăng ký interval khi component unmount
  }, [slide]);

  const handleClick = () => {
    setSlide((pre) => (pre === 0 ? 1 : 0));
    console.log(slide);
    gotoSlide(slide);
  };
  return (
    <header>
      <div className="relative h-[448px] w-full overflow-hidden md:h-[592px] lg:h-[498px] xl:h-[670px]">
        <div
          className="slider absolute h-full w-full bg-[url('https://slimweb.vn/site/cuahangbanhoa/images/user/17245/homev3aslider2.jpg')] bg-cover bg-center delay-200 duration-500 ease-linear"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="m-auto grid grid-cols-6 py-16 md:py-24 lg:max-w-[960px] lg:py-40 xl:max-w-[1200px]">
            <div className="col-start-4 col-end-7 max-md:col-start-2 max-md:col-end-6">
              <HeaderSub titleSub="Đó là ngày của bạn" />
              <HeaderMain titleMain="Chúc mừng sinh nhật" class="mb-[50px]" />
              <Link class="px-10 py-4" />
            </div>
          </div>
        </div>
        <div
          className="slider absolute h-full w-full bg-[url('https://slimweb.vn/site/cuahangbanhoa/images/user/17245/homev3aslider1.jpg')] bg-cover bg-center delay-200 duration-500 ease-linear"
          style={{ transform: "translateX(100%)" }}
        >
          <div className="m-auto grid grid-cols-6 py-16 sm:max-w-[540px] md:py-24 lg:max-w-[720px] lg:py-40 xl:max-w-[1200px]">
            <div className="col-start-1 col-end-4 px-4">
              <HeaderMain titleMain="Bộ sưu tập mới" />
              <HeaderSub titleSub="Một cửa hàng hoàn hảo" class="mb-[50px]" />
              <Link class="px-10 py-4" />
            </div>
          </div>
        </div>
        <div className="dots absolute bottom-[5%] left-[48%] flex hover:cursor-pointer">
          <div
            className={"dots__dot " + (slide == 0 ? "dots__dot--active" : "")}
            onClick={handleClick}
          ></div>
          <div
            className={"dots__dot " + (slide == 1 ? "dots__dot--active" : "")}
            onClick={handleClick}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
