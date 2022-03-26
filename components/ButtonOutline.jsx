function ButtonOutline({ text }) {
  return (
    <button className="text-yellow-300 border border-yellow-300 font-semibold rounded bg-transparent px-6 py-1 my-2 max-w-fit h-fit cursor-pointer">
      {text}
    </button>
  );
}

export default ButtonOutline;
