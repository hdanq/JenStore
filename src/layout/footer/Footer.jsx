import React from "react";
import FacebookIcon from "../../component/icon/FacebookIcon";
import InstagramIcon from "../../component/icon/InstagramIcon";
import YoutubeIcon from "../../component/icon/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="relative pb-10 pt-5">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[#f7e2e6]"></div>

      <div className="m-auto grid grid-cols-3 max-lg:px-10 max-md:grid-cols-1 xl:w-[1200px]">
        <div className="pt-5">
          <h4 className="mb-5 uppercase">Về chúng tôi</h4>
          <ul className=" leading-loose">
            <li>
              <a href="#">Chính sách bán hàng</a>
            </li>
            <li>
              <a href="#">Giao hàng trả hàng</a>
            </li>
            <li>
              <a href="#">Ưu đãi trong ngày</a>
            </li>
          </ul>
        </div>
        <div className="pt-5">
          <h4 className="mb-5 uppercase">Cửa hàng</h4>
          <ul className=" leading-loose">
            <li>
              <a href="#">Lễ cưới</a>
            </li>
            <li>
              <a href="#">Sinh nhật</a>
            </li>
            <li>
              <a href="#">Ngày phụ nữ</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="pt-5">
            <h4 className="uppercase">Kết nối với chúng tôi</h4>
            <ul className="flex justify-items-center gap-5 py-3">
              <li>
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h4 className="mb-3 uppercase">Bản tin</h4>
            <p>
              Đăng ký danh sách gửi thư của chúng tôi để nhận các cập nhật và ưu
              đãi mới nhất
            </p>
            <div className="flex">
              <input
                className="border-none px-6 py-2"
                type="text"
                placeholder="Nhập email của bạn"
              />
              <button className="border-none px-4">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
