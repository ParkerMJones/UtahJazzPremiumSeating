import Image from "next/image";

function ButtonOutline({ text, isYellow, icon }) {
  return (
    <button
      type="button"
      className={`text-sm rounded bg-transparent px-4 py-1 my-2 max-w-fit min-w-fit whitespace-nowrap h-fit cursor-pointer flex items-center justify-between gap-2 border ${
        isYellow
          ? "text-jazz-yellow border-jazz-yellow"
          : "text-black border-black"
      }`}
    >
      <>
        {icon && <Image src={icon} width={20} height={20} alt={text} />}
        <p>{text}</p>
      </>
    </button>
  );
}

export function ButtonSolid({ text, isSmall }) {
  return (
    <button
      type="button"
      className={`rounded-md bg-jazz-yellow border border-black max-w-fit whitespace-nowrap h-fit cursor-pointer flex justify-between items-center gap-2 text-black font-bold
      ${isSmall ? "text-xs px-3 py-1.5" : "px-8 py-2 uppercase"}
      `}
    >
      {text}
    </button>
  );
}

export default ButtonOutline;
