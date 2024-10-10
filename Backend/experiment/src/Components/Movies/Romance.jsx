import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Romance= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // number of cards visible at once
    slidesToScroll: 1, // number of cards to scroll per swipe
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const movies = [
    { id: 1, title: "Amavas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHN_chGtXCh_K90Y49bKwyeCsU7HtoucUsRQ&s" },
    { id: 2, title: " College Romance ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4otUKOnCytxozhEXT0Qv0NPiOi_cWz54Ng&s" },
    { id: 3, title: " Our Secret", image: "https://m.media-amazon.com/images/S/pv-target-images/eac2e9efe6c4ece4ffd3bd06df335068d4e61f2f6eb0e93d97c832999f0a2574.jpg" },
    { id: 4, title: "You", image: "https://m.media-amazon.com/images/M/MV5BNGZjZDc3NjAtYjI1OC00NWUzLWIxOWItNzUyODc5NDIwMWRjXkEyXkFqcGdeQXVyNTQ4ODA2NzQ@._V1_FMjpg_UX1000_.jpg" },
    { id: 5, title: "No HardsFeelings  ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x60uu6Z_HNFPQjMEckrLUQBwHKEjkEx_qA&s" },
    { id: 6, title: "Never Have Ever", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-Hx93gIncEtydWh8b1txePey4FCuJPcb_g&s" },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Romance</h2>
      <Slider {...settings}> 
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-white mt-2 text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Romance;
