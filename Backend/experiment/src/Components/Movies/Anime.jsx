import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Anime = () => {
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
    { id: 1, title: "Naruto", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdlxNhEIvXRavfgsTHaPFhaFtEKvtPE-woA&s" },
    { id: 2, title: "One pies", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7HD0C_Xl7sZjiAu-vPNKMwvA78f_-uY2Fw&s" },
    { id: 3, title: "Death note", image: "https://www.epicstuff.com/cdn/shop/products/61Ph0WTHHxL._SL1500_1024x1024.jpg?v=1639224167" },
    { id: 4, title: "Drygon ball", image: "https://thecomicbookstore.in/storage/2022/09/TCBS2495-1-scaled.jpg" },
    { id: 5, title: "Wanted", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JGS2YduCZbXBA93AMckWv-TgsJiEEndiiw&s" },
    { id: 6, title: "Your Name ", image: "https://i.pinimg.com/originals/e8/54/91/e8549118729ac0a92a068aef64c17d01.jpg" },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Anime Series </h2>
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

export default Anime;
