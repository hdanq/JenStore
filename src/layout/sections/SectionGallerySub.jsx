import React from "react";

const gallery = [
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta1.jpg",
  },
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta2.jpg",
  },
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta3.jpg",
  },
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta5.jpg",
  },
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta6.jpg",
  },
  {
    image:
      "https://slimweb.vn/site/cuahangbanhoa/images/user/17245/imgalinkainsta2.jpg",
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
