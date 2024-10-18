import React, { useState } from "react";
import Header from "../../components/reusable/Header";
import Footer from "../../components/reusable/Footer";
import AlbumCard from "../reusable/AlbumCard";
import AlbumDetails from "../reusable/AlbumDetails";

const UserProfile = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const user = {
    name: "Thiago Silveira Machado",
    alias: "thiagosm",
    profession: "Fotografo",
    profileImage: "https://via.placeholder.com/150",
    albums: [
      {
        title: "Cerro Largo vs Deportivo Maldonado",
        date: "Jueves 17/10/2024",
        description: "Fútbol - Partido en Melo, Cerro Largo",
        image: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
        photos: [
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
          {
            url: "https://www.catapult.com/wp-content/uploads/2024/06/CBF.png",
            price: 20.0,
          },
        ],
      },
    ],
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleBackToProfile = () => {
    setSelectedAlbum(null);
  };

  return (
    <div>
      <Header />

      {selectedAlbum ? (
        <AlbumDetails album={selectedAlbum} onBack={handleBackToProfile} />
      ) : (
        <div className="min-h-screen flex justify-center bg-white">
          <div className="max-w-5xl w-full bg-white">
            <div className="py-16 flex flex-row space-x-8 items-center justify-between">
              <div className="flex flex-row space-x-8 items-center text-left">
                <img
                  className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
                  src={user.profileImage}
                  alt="Foto de perfil"
                />
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {user.name}
                  </h2>
                  <p className="text-indigo-600 text-lg mb-3">
                    {user.profession}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Alias:</span> {user.alias}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Álbumes publicados:</span>{" "}
                    {user.albums.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="py-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Álbumes publicados
              </h3>
              {user.albums.length === 0 ? (
                <p className="text-gray-600 italic">
                  No hay álbumes publicados aún
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {user.albums.map((album, index) => (
                    <AlbumCard
                      key={index}
                      title={album.title}
                      date={album.date}
                      description={album.description}
                      image={album.image}
                      onClick={() => handleAlbumClick(album)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UserProfile;
