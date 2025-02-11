import { useEffect, useState } from "react";

const images = ["img/02.jpg", "img/03.jpg", "img/04.jpg", "img/06.jpg"];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  mx-auto overflow-hidden lg:">
      <div
        className="flex transition-transform duration-1000 linear"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="h-[300px] md:min-h-[400px] lg:min-h-[460px] xl:min-h-[550px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
