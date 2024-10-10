import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Horror = () => {
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
    { id: 1, title: "Don't Speak ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsS9uRszakgGs9LhRCe3SjAjlvWPM5Us2gA&s" },
    { id: 2, title: "Conjuring 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8JEBmjVEsQyme1mg2wvJFIkyXFD8dN4zHQ&s" },
    { id: 3, title: "The witch", image: "https://www.indiewire.com/wp-content/uploads/2017/05/the-witch-2015.jpg?w=675" },
    { id: 4, title: "The evil maid me do it", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBrGlcW0zJm6RRqf3yKsd5wBOBFz0xlMd90s3G-QxyRi8Nb08aAO1cpf7AGNAhwsD0ho&usqp=CAU" },
    { id: 5, title: "Bhoot", image: "https://e1.pxfuel.com/desktop-wallpaper/999/543/desktop-wallpaper-10-exciting-horror-movies-coming-out-in-2020-bollywood-movie-poster-2021.jpg" },
    { id: 6, title: "Ghost", image: "https://desimartini-images.s3.ap-south-1.amazonaws.com/images_latest/webstories/wp-content/uploads/2023/06/ghost-2019-hindi-horror-movie-poster.jpg" },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Hunting Hub </h2>
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

export default Horror;
