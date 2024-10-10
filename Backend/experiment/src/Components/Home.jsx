import React from 'react';
 

const Home = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('https://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Telivision 

          </h1>
          <p className="text-lg md:text-xl mb-6">To having  an unforgettable experience!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Learn More
          </button>
        </div>
        
      </div>
       
    </div>
  );
};

export default Home;
