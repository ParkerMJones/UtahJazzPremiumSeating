import Image from "next/image";

function ButtonOutline({ text, isYellow, icon }) {
  return (
    <button
      type="button"
      className={`font-semibold text-sm rounded bg-transparent px-4 py-1 my-2 max-w-fit min-w-fit whitespace-nowrap h-fit cursor-pointer flex items-center justify-between gap-2 border ${
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

export function ButtonSolid({ text }) {
  return (
    <button
      type="button"
      className="rounded-md bg-jazz-yellow border border-black px-8 py-2 max-w-fit whitespace-nowrap h-fit cursor-pointer flex justify-between items-center gap-2 text-black uppercase font-bold"
    >
      {text}
    </button>
  );
}

export default ButtonOutline;
