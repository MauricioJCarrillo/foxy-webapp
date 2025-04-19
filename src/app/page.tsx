import { RandomFox } from "@/components/RandomFox";

const getRandomFox = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const image: string = `https://randomfox.ca/images/${getRandomFox()}.jpg`;
  console.log("Image", image);

  return (
    <>
      <h1>Hello World!</h1>
      <RandomFox image={image} />
    </>
  );
}
