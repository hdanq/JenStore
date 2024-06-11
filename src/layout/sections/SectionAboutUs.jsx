import { doc } from "prettier";
import React, { useEffect, useState } from "react";

const feedback = [
  {
    avatar: "./src/images/avatarafeedback.png",
    comment: "Ship giao hàng rất nhanh",
    name: "Nguyễn Hằng",
    job: "Giáo viên",
  },
  {
    avatar: "./src/images/avatarafeedback.png",
    comment: "Hoa rấ đẹp và tươi",
    name: "Ngọc Ánh",
    job: "Đầu bếp",
  },
  {
    avatar: "./src/images/avatarafeedback.png",
    comment: "Dịch vụ tốt, có dịp mình sẽ quay lại",
    name: "Minh Anh",
    job: "NV văn phòng",
  },
];

const SectionAboutUs = () => {
  const [slide, setSlide] = useState(0);

  const gotoSlide = (slide) => {
    const slides = document.querySelectorAll(".carousel__slider");
    slides.forEach((silder, index) => {
      silder.style.transform = `translateX(${(index - slide) * 100}%)`;
    });
  };
  const handlePrevClick = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? feedback.length - 1 : prevSlide - 1,
    );
    gotoSlide(slide);
  };
  const handleNextClick = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? feedback.length - 1 : prevSlide - 1,
    );
    gotoSlide(slide);
  };

  return (
    <section id="about_us">
      <div className="relative text-center">
        <h2 className="mb-10 text-[40px] font-light xl:text-[50px]">
          Khách hàng nói về chúng tôi
        </h2>
        <div className="relative m-auto grid h-[200px] w-[60%] grid-cols-1 place-content-center place-items-center overflow-hidden">
          {feedback.map((customer, index) => (
            <div
              key={index}
              className="carousel__slider absolute top-0 w-full delay-500 duration-300 ease-in-out"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <img className="inline" src={customer.avatar} alt="" />
              <h4 className="font-light uppercase">{customer.comment}</h4>
              <p>
                – <b>{customer.name}</b> - <span>{customer.job}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="carousel">
          <div
            className="carousel__prev absolute left-[5%] top-[55%] text-5xl hover:cursor-pointer"
            onClick={handlePrevClick}
          >
            ←
          </div>
          <div
            className="carousel__next absolute right-[5%] top-[55%] text-5xl hover:cursor-pointer"
            onClick={handleNextClick}
          >
            →
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
