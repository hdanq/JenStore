import React from "react";

const gallery = [
  {
    image: "./src/images/gallery/imgalinkainsta1.jpg",
  },
  {
    image: "./src/images/gallery/imgalinkainsta2.jpg",
  },
  {
    image: "./src/images/gallery/imgalinkainsta3.jpg",
  },
  {
    image: "./src/images/gallery/imgalinkainsta5.jpg",
  },
  {
    image: "./src/images/gallery/imgalinkainsta6.jpg",
  },
  {
    image: "./src/images/gallery/imgalinkainsta2.jpg",
  },
];

const SectionGallerySub = () => {
  return (
    <section>
      <div className="m-auto flex flex-wrap justify-center gap-5 pb-5">
        {gallery.map((item, index) => (
          <a href="#" key={index}>
            <img src={item.image} alt="" width={160} height={160} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionGallerySub;
