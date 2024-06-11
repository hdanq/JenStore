import React from "react";

const news = [
  {
    img: "./src/images/news/1.png",
    days: "25/11/2020",
    description: "Cách cắm hoa đẹp",
  },
  {
    img: "./src/images/news/2.png",
    days: "03/10/2020",
    description: "Hoa tươi trao yêu thương - tình yêu từ sự thấu hiểu",
  },
  {
    img: "./src/images/news/3.png",
    days: "28/12/2023",
    description: "Chúc mừng 8/3: Tôn vinh người phụ nữ yêu thương",
  },
];

const SectionNews = () => {
  return (
    <section id="news" className="pb-20">
      <h2 className="mb-5 text-center text-[50px] font-light capitalize max-lg:text-[40px]">
        Tin tức mới nhất
      </h2>
      <div className="m-auto mb-5 grid w-[60%] grid-cols-3 place-items-center gap-10 max-lg:w-[80%] max-md:grid-cols-1">
        {news.map((item, index) => (
          <div key={index} className="">
            <img src={item.img} alt="" />
            <p>{item.days}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionNews;
