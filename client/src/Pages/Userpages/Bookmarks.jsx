import React from "react";
import Bookmarkcard from "../../Components/Userpagecomps/Bookmarkcard";

const Bookmarks = () => {
  const marks = [
    {
      id: 1,
      title: "Yük maşını atego sürücüsü",
      time: " 22 saat əvvəl",
    },
    {
      id: 2,
      title: "Uçuşların təhlükəsizliyi və Keyfiyyətə Nəzarət üzrə Mütəxəssis (Lənkəran BHL)",
      time: " 22 saat əvvəl",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12">
        <h1 className="py-10 text-2xl font-normal">Gözaltılar</h1>
        <div className="w-full shadow-custom mb-10">
          {
            marks?.map((item) => {
             return <Bookmarkcard key={item.id} item={item} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
