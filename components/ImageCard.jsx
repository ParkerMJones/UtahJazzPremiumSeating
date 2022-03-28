import Image from "next/image";
import Link from "next/link";
import ButtonOutline from "./Button";

function ImageCard({ image, title, text, destination }) {
  return (
    <Link href={destination} passHref>
      <a className="bg-black text-white max-w-xl w-full hover:cursor-pointer">
        <Image
          src={image}
          width={600}
          height={250}
          alt={title}
          objectFit="cover"
        />
        <div className="px-8 md:h-96 lg:h-72 grid grid-rows-5 py-4 mb-2 items-start">
          <h2 className="text-2xl text-jazz-yellow font-bold row-span-1">
            {title}
          </h2>
          <p className="text-md row-span-3 leading-5">{text}</p>
          <ButtonOutline
            text="Learn More"
            className="row-span-1"
            isYellow={true}
          >
            Learn More
          </ButtonOutline>
        </div>
      </a>
    </Link>
  );
}

export default ImageCard;
