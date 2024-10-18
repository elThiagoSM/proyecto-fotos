import React from "react";

const AlbumDetails = ({ album, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="w-full max-w-5xl mx-auto py-16">
        <button
          className="mb-6 px-6 py-2 bg-indigo-500 text-white rounded-lg transition duration-200"
          onClick={onBack}
        >
          Volver al perfil
        </button>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">{album.title}</h2>
        <p className="text-gray-500 mb-2 italic">{album.date}</p>
        <p className="text-gray-700 mb-6">{album.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-64 object-cover"
                src={photo.url}
                alt={`Foto ${index + 1}`}
              />
              <div className="p-4 bg-gray-100">
                <p className="text-lg text-gray-900 font-semibold">
                  ${photo.price.toFixed(2)} USD
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
