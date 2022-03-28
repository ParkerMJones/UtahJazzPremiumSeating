import Image from "next/image";

function ImageWithText({ text, subtext, image }) {
  return (
    <article className="relative h-full w-fit overflow-hidden">
      <Image
        src={image}
        width={800}
        height={400}
        alt={text}
        className="w-full h-full object-cover brightness-50"
      />
      <div className="text-lg md:text-3xl text-center absolute top-0 bottom-0 left-0 right-0 m-auto text-white h-fit uppercase p-2">
        <h1>{text}</h1>
        <h1>{subtext}</h1>
      </div>
    </article>
  );
}

export default ImageWithText;
