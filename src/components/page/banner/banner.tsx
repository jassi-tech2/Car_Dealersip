import React, { useEffect, useState } from "react";
import "./style.scss";

type BannerItem = {
  image: string;
  text: string;
};

type BannerProps = {
  items: BannerItem[];
  interval?: number;
};

const Banner: React.FC<BannerProps> = ({ items, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  return (
    <div className="banner-container">
      <img
        src={items[current].image}
        alt={items[current].text}
        className="banner-image"
      />
      <div className="banner-text">{items[current].text}</div>
    </div>
  );
};

export default Banner;