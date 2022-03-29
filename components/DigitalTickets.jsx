import Image from "next/image";

function DigitalTickets() {
  return (
    <section className="bg-digital-gray">
      <div className="px-12 md:spacing flex justify-between items-center py-12 gap-8">
        <div className="lg:w-3/5 leading-5 text-lg">
          <h2 className="text-4xl text-black font-bold pb-4">
            Digital Tickets
          </h2>
          <p className="py-4">
            All tickets will be digital and accessible in the Utah Jazz + Vivint
            Arena App. Printed tickets will no longer be an option.
          </p>
          <p className="pb-4">
            This move to digital-only has been made for several reasons:{" "}
          </p>
          <ul>
            <li>Helps to prevent fraudulent tickets from being circulated</li>
            <li>
              Increases safety and security by providing an easier way to track
              who’s using tickets and entering the arena
            </li>
            <li>
              Allows for a convenient transfer process—you can transfer your
              tickets with the touch of a button
            </li>
            <li>
              - Helps to prevent fraudulent tickets from being circulated.
            </li>
            <li>
              - Increases safety and security by providing an easier way to
              track who’s using tickets and entering the arena.
            </li>
            <li>
              - Allows for a convenient transfer process—you can transfer your
              tickets with the touch of a button.
            </li>
          </ul>
          <p className="py-4">
            If you have questions or concerns about digital tickets, please
            contact your account representative.
          </p>
          <button className="rounded bg-jazz-yellow border border-black px-3 py-2 my-2 max-w-fit h-fit uppercase cursor-pointer flex justify-between items-center gap-2">
            <div className="text-black text-sm font-bold">
              Learn more about digital tickets
            </div>
            <div>▶</div>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="w-96 h-60 bg-white border border-neutral-400 grid place-content-center">
            <div className="shrink-0 opacity-25">
              <Image
                src="/playIcon.png"
                width={60}
                height={60}
                alt="play button"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalTickets;
