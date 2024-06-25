import React from "react";
import { FaUserEdit } from "react-icons/fa";

const Information = () => {
  return (
    <div className="p-4">
      <div className="min-h-10 p-6">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <FaUserEdit />
          <h1> Fərdi məlumatlar</h1>
        </div>
      </div>
      <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6">
        <div className="px-6">
          <h5 className="py-3">Ad</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Adınızı girin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Soyad</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Soyadınızı girin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Cinsi</h5>
          <select className="border p-2 rounded-sm w-full">
            <option value="male">Kişi</option>
            <option value="female">Qadın</option>
            <option value="other">Digər</option>
          </select>
        </div>
        <div className="px-6">
          <h5 className="py-3">Doğum tarixi</h5>
          <input className="border p-2 rounded-sm w-full" type="date" />
        </div>
        <div className="px-6">
          <h5 className="py-3">Ölkə</h5>
          <select name="user_country" className="border p-2 rounded-sm w-full">
            <option value="">Seçilməyib</option>
            <option value="1">Azərbaycan</option>
            <option value="2">Rusiya</option>
            <option value="29">Almaniya</option>
            <option value="248">Türkiyə</option>
          </select>
        </div>
        <div className="px-6">
          <h5 className="py-3">Şəhər</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Şəhərinizi girin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Mobil telefon</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="tel"
            placeholder="Mobil telefon nömrənizi girin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">E-mail</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="email"
            placeholder="E-mail adresinizi girin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">İşləmək istədiyim sahə</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="İşləmək istədiyim sahəni girin"
          />
        </div>
      </div>
      <div className="w-full flex justify-end items-center p-6 h-36">
        <button className="w-36 h-12 rounded-md text-white bg-gray-800">
          Yadda saxla
        </button>
      </div>
    </div>
  );
};

export default Information;
