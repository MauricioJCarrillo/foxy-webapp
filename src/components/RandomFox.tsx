import Image from "next/image";
import { JSX, useRef } from "react";

type RandomFoxProps = {
  image: string;
};

export const RandomFox = ({ image }: RandomFoxProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  return (
    <>
      <Image
        ref={node}
        className="rounded-lg"
        width={320}
        height={320}
        src={image}
        alt="random fox"
        suppressHydrationWarning
      />
    </>
  );
};
