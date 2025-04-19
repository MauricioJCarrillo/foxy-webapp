"use client";
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

const getRandomFox = (): number => Math.floor(Math.random() * 123) + 1;

type ImageItem = {
  id: string;
  url: string;
};

export default function Home() {
  // const image: string = `https://randomfox.ca/images/${getRandomFox()}.jpg`;
  // console.log("Image", image);

  const [images, setImages] = useState<ImageItem[]>([
    {
      id: crypto.randomUUID(),
      url: `https://randomfox.ca/images/${getRandomFox()}.jpg`,
    },
  ]);

  const handleClick = () => {
    setImages((prevImages) => [
      ...prevImages,
      {
        id: crypto.randomUUID(),
        url: `https://randomfox.ca/images/${getRandomFox()}.jpg`,
      },
    ]);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {images?.map((image) => (
        <div key={image.id} className="p-2">
          <RandomFox image={image.url} />
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Add Random Fox
      </button>
    </div>
  );
}
