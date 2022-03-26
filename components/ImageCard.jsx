import Image from "next/image";
import Link from "next/link";
import Button from "./ButtonOutline";

function ImageCard({ image, title, text, destination }) {
  return (
    <Link href={destination} passHref>
      <div className="bg-black text-white max-w-xl hover:cursor-pointer">
        <Image
          src={image}
          width={600}
          height={250}
          alt={title}
          className="object-cover"
        />
        <div className="px-8 h-72 grid grid-rows-5 py-4 mb-2 items-start">
          <h2 className="text-2xl text-yellow-300 font-bold row-span-1">
            {title}
          </h2>
          <p className="font-light leading-5 row-span-3">{text}</p>
          <Button text="Learn More" isSolid={false} className="row-span-1">
            Learn More
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default ImageCard;
