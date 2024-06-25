import React from "react";
import {
  FaTelegram,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customGray w-full min-h-[500px] text-gray-300 flex justify-center items-center flex-col">
      <div className="container my-9 pl-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 p-2">
            <div class=" h-full">
              <div class="footer-links">
                <h4 className="text-white font-medium text-lg pb-2 ">
                  Namizədlər üçün
                </h4>
                <ul>
                  <li>
                    <a href="">Iş elanları</a>
                  </li>
                  <li>
                    <a href="">Ətraflı axtarış</a>
                  </li>
                  <li>
                    <a href="">Şirkətlərin siyahısı</a>
                  </li>
                  <li>
                    <a href="">İş kateqoriyaları</a>
                  </li>
                  <li>
                    <a href="">İxtisaslar</a>
                  </li>
                  <li>
                    <a href="">Rayonlar üzrə vakansiyalar</a>
                  </li>
                  <li>
                    <a href="">İxtisaslar kateqoriya üzrə</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 p-2">
            <div class=" h-full">
              <div class="footer-links">
                <h4 className="text-white font-medium text-lg pb-2">
                  İşəgötürənlər üçün
                </h4>
                <ul>
                  <li>
                    <a href="">İşçini necə tapmalı?</a>
                  </li>
                  <li>
                    <a href="">Qiymətlər</a>
                  </li>
                  <li>
                    <a href="">Headhunting</a>
                  </li>
                  <li>
                    <a href="">İşaxtaranlar</a>
                  </li>
                  <li>
                    <a href="">Hedhantinq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 p-2">
            <div class=" h-full">
              <div class="footer-links">
                <h4 className="text-white font-medium text-lg pb-2">Faydalı</h4>
                <ul>
                  <li>
                    <a href="">Bloq</a>
                  </li>
                  <li>
                    <a href="">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="">Şərtlər və Qaydalar</a>
                  </li>
                  <li>
                    <a href="">Məxfilik siyasəti</a>
                  </li>
                  <li>
                    <a href="">Əlaqə</a>
                  </li>
                  <li>
                    <a href="">Ödəmə və maliyyə</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 p-2">
            <div class=" h-full">
              <div class="footer-links">
                <h4 className="text-white font-medium text-lg pb-2">
                  Namizədlər üçün
                </h4>
                <ul>
                  <li>
                    <a href="">Iş elanları</a>
                  </li>
                  <li>
                    <a href="">Ətraflı axtarış</a>
                  </li>
                  <li>
                    <a href="">Şirkətlərin siyahısı</a>
                  </li>
                  <li>
                    <a href="">İş kateqoriyaları</a>
                  </li>
                  <li>
                    <a href="">İxtisaslar</a>
                  </li>
                  <li>
                    <a href="">Rayonlar üzrə vakansiyalar</a>
                  </li>
                  <li>
                    <a href="">İxtisaslar kateqoriya üzrə</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-gray-400 w-full h-24 flex justify-center items-center">
        <div className="flex gap-4 col text-gray-400">
          <FaFacebookF size={22} />
          <FaLinkedinIn size={22} />
          <FaInstagram size={22} />
          <FaTwitter size={22} />
          <FaYoutube size={22} />
          <FaTelegram size={22} />
        </div>
      </div>
      <div class="w-full flex justify-center h-20 items-center">
        <p>© 2024 <strong>Busy.az</strong> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
