import React, { useState } from 'react';

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWquH2IjfQksI9EeHhfDnTqltZmFMZ6aA8w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsoYU-OqoAywZJLzItA2D8LGgPt23PZT5Yw&s",
 
];

function Silder() {
  const[next,setnext]=useState(0)
  function forword(){
    setnext((next+1)%data.length)
  }
  function backword(){
 if(next===0)
 {
  setnext(data.length-1)
 }
 else{
  setnext(next-1)
 }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10 ml-10" onClick={backword}>{"<"} </button>
      <img src={data[next]} alt="Slider" className="max-w-full h-auto" />
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10 ml-10" onClick={forword}>{">"} </button>
    </div>
  );
}

export default Silder;
