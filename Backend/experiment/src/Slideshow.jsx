import React, { useEffect, useState } from 'react';

const data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWquH2IjfQksI9EeHhfDnTqltZmFMZ6aA8w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsoYU-OqoAywZJLzItA2D8LGgPt23PZT5Yw&s"
];

function Slideshow() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(data===1){
        setImageSrc(0)
      }
      setImageSrc(data[0]);
      console.log(data);
    }, 2000);
    const timeoutIdnext = setTimeout(() => {
      setImageSrc(data[1]);
      console.log(data);
    }, 4000);
    
    return () => clearTimeout(timeoutId,timeoutIdnext);
  }, []);
  

  return (
    <div>
      Slideshow Component
      {imageSrc && <img src={imageSrc} alt="Slideshow" />}
    </div>
  );
}

export default Slideshow;
