import React from "react";

const navItems = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Cửa hàng",
    link: "#products",
  },
  {
    title: "Về chúng tôi",
    link: "#about_us",
  },
  {
    title: "Tin tức",
    link: "#news",
  },
];

const NavBar = () => {
  return (
    <nav>
      <div className="m-3 items-center justify-around lg:flex">
        <img
          className="mb-10 lg:mb-0"
          src="	https://slimweb.vn/site/cuahangbanhoa/images/user/17245/logoahoa.png"
          alt="logo"
        />
        <ul className="gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.title} className="my-5">
              <a className="text-lg lg:p-4" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
          <div className="mt-10 flex gap-3 lg:m-5">
            <div className="relative hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <sup className="absolute right-0 top-0 h-[14px] w-[14px] rounded-full bg-[#e03131] pb-4 text-center text-[12px] text-[#fff]">
                0
              </sup>
            </div>
            <p>Cửa Hàng</p>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
