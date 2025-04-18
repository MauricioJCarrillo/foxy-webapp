import Image from "next/image";
import { JSX } from "react";

const getRandomFox = (): number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${getRandomFox()}.jpg`;
  console.log("Image", image);

  return (
    <>
      <h1>RandomFox</h1>
      <Image
        className="rounded-lg"
        width={320}
        height={320}
        src={image}
        alt="random fox"
      />
    </>
  );
};
