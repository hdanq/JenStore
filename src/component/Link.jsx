import React from "react";

const Link = (props) => {
  return (
    <>
      <a
        className={
          "rounded border-2 bg-[#232122] font-['AbrilFatface'] text-[120%] font-bold text-[#fff] " +
          props.class
        }
        href="#"
      >
        Trải nghiệm ngay
      </a>
    </>
  );
};

export default Link;
