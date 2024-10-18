import React from "react";

const AlbumCard = ({ title, date, description, image, onClick }) => {
  return (
    <div
      className="bg-gray-100 shadow-md rounded-md overflow-hidden text-left cursor-pointer"
      onClick={onClick}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
