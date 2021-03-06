import Image from "next/image";

import { ButtonSolid } from "./Button";

function Contact() {
  return (
    <section className="bg-neutral-800" id="contact">
      <div className="px-12 md:spacing text-white pt-8 pb-24">
        <h2 className="text-3xl text-white py-8 font-bold uppercase">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <Image
                src="/phone.svg"
                width={24}
                height={24}
                alt="Phone Number"
                className="bg-jazz-yellow rounded-md"
              />
              <p className="pl-1 font-mono tracking-wider text-xl">
                801-325-2105
              </p>
            </div>
            <div className="flex gap-2 items-center -ml-1">
              <Image src="/mail.svg" width={32} height={32} alt="Email" />
              <p className="font-mono text-xl">bizdev@utahjazz.com</p>
            </div>
            <p className="text-lg">
              With options like single-game tickets, suite rentals and special
              group rates, experiencing Utah Jazz basketball has never been more
              convenient! Just let us know what you’re interested in and we can
              customize a package to fit your group and budget.
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="input">User Input</label>
              <input
                type="text"
                className="rounded-tr rounded-bl py-1.5 px-2 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="input">User Input</label>
              <input
                type="text"
                className="rounded-tr rounded-bl py-1.5 px-2 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="input">User Input</label>
              <input
                type="text"
                className="rounded-tr rounded-bl py-1.5 px-2 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="input">Options</label>
              <select className="rounded-tr rounded-bl py-2 px-2 border-r-8 border-r-transparent text-sm text-gray-400">
                <option value="" disabled selected>
                  Select...
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Short Text</label>
              <textarea
                type="text"
                className="rounded-tr rounded-bl py-3 px-2 resize-none text-black"
              />
            </div>
            <div className="-ml-[1px]">
              <ButtonSolid text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
