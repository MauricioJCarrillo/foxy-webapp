import Image from "next/image";
import { JSX } from "react";

type RandomFoxProps = {
  image: string;
};

export const RandomFox = ({ image }: RandomFoxProps): JSX.Element => {
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
