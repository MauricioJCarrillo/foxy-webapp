"use client";
import { MouseEventHandler, useState } from "react";
import { RandomFox } from "@/components/RandomFox";

const getRandomFox = (): number => Math.floor(Math.random() * 123) + 1;

type ImageItem = {
  id: string;
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
      id: crypto.randomUUID(),
      url: `https://randomfox.ca/images/${getRandomFox()}.jpg`,
    };

    setImages((prevImages) => [...prevImages, newImageItem]);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addNewFox}
      >
        Add Random Fox
      </button>
      {images?.map((image) => (
        <div key={image.id} className="p-2">
          <RandomFox image={image.url} />
        </div>
      ))}
    </div>
  );
}
