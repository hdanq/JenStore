import React from "react";
import StarIcon from "./icon/StarIcon";
import CartIcon from "./icon/cartIcon";

const ProductItem = (props, { key }) => {
  return (
    <li
      key={key}
      className="group relative bg-[#fff] leading-loose opacity-80 hover:opacity-100 hover:shadow-xl"
    >
      <a href="#">
        <img src={props.img} alt="" />
      </a>
      <div className="py-4">
        <p>{props.name}</p>
        <div className="flex justify-center">
          {[1, 2, 3, 4, 5].map((rate) => (
            <span key={rate}>
              {props.rate >= rate ? (
                <StarIcon check="true" />
              ) : (
                <StarIcon check="false" />
              )}
            </span>
          ))}
        </div>
        <h4>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}Đ</h4>
      </div>
      <div className="absolute left-[45%] top-[45%] skew-y-6 rounded-full bg-black p-2 opacity-0 delay-150 duration-300 ease-in hover:cursor-pointer group-hover:opacity-100">
        <CartIcon />
      </div>
    </li>
  );
};

export default ProductItem;
