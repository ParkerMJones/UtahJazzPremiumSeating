import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ImageWithText from "../components/ImageWithText";
import ImageCard from "../components/ImageCard";
import ButtonOutline from "../components/ButtonOutline";

import courtsideSuite from "../assets/images/JAZ2122_Premium_CourtsideSuite1.jpg";
import courtsideClub from "../assets/images/JAZ2122_Premium_CourtsideClub1.jpg";
import videoThumbnail from "../assets/images/video-thumbnail.png";
import EBS4 from "../assets/images/JAZ2122_Premium_EBS4.jpg";
import udoLounge from "../assets/images/JAZ2122_Premium_UdoLounge1.jpg";
import logeBox from "../assets/images/JAZ2122_Premium_LogeBox1.jpg";
import toyotaClub from "../assets/images/JAZ2122_Premium_ToyotaClub7.jpg";
import eideBaillyClub from "../assets/images/JAZ2122_Premium_EBC1.jpg";
import WCF from "../assets/images/JAZ2122_Premium_WCF4.jpg";
import lexusClub from "../assets/images/JAZ2122_Premium_Lexus2.jpg";
import courtsideClub2 from "../assets/images/JAZ2122_Premium_CourtsideClub26.jpg";
import legendsClub from "../assets/images/JAZ2122_Premium_Legends1.jpg";
import jazzIcon from "../assets/images/jazzIcon.png";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <nav className="text-white border-b h-14 flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex max-w-fit items-center gap-4">
            <Image src={jazzIcon} width={40} height={40} alt="Jazz Icon" />
            <h3 className="uppercase">Utah Jazz Premium Seating</h3>
          </div>
          <ol className="flex gap-12 text-yellow-300 text-sm">
            <li>Luxury Suites</li>
            <li>Exclusive Clubs</li>
            <li>Contact Us</li>
          </ol>
        </nav>
      </div>
      <section className="bg-black">
        <div className="py-32 flex flex-col justify-center items-center gap-4 max-w-6xl mx-auto">
          <h1 className="text-6xl text-white font-semibold uppercase">
            Premium Seating
          </h1>
          <h2 className="text-yellow-300 uppercase text-3xl pb-2">
            The best way to enjoy all the excitement
          </h2>
          <p className="text-white text-center font-light text-lg">
            Whether you’re entertaining business clients, closing a major deal,
            or socializing with family and friends, a luxury suite provides all
            the convenience, comfort and service you desire. As the home of the
            Utah Jazz and the country’s most popular touring musical acts and
            family shows, Vivint Arena is the place to meet, greet, see and be
            seen in Utah.
          </p>
          <Link href="/" passHref>
            <a className="whitespace-nowrap">
              <ButtonOutline text="Contact Us" />
            </a>
          </Link>
        </div>
      </section>
      <section className="mb-16">
        <div className="flex justify-center gap-5 -mt-16">
          <ImageCard
            image={courtsideSuite}
            title="Luxury Suites"
            text="Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder."
            destination="/"
          />
          <ImageCard
            image={courtsideClub}
            title="Exclusive Clubs"
            text="Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena."
            destination="/"
          />
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="flex justify-between items-center py-12 max-w-6xl mx-auto">
          <div className="w-3/5 leading-5">
            <h2 className="text-3xl text-black font-bold pb-4">
              Digital Tickets
            </h2>
            <p className="py-4">
              All tickets will be digital and accessible in the Utah Jazz +
              Vivint Arena App. Printed tickets will no longer be an option.
            </p>
            <p className="pb-4">
              This move to digital-only has been made for several reasons:{" "}
            </p>
            <ul>
              <li>Helps to prevent fraudulent tickets from being circulated</li>
              <li>
                Increases safety and security by providing an easier way to
                track who’s using tickets and entering the arena
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
            <button className="rounded bg-yellow-300 border border-black px-3 py-2 my-2 max-w-fit h-fit uppercase cursor-pointer flex justify-between items-center gap-2">
              <div className="text-black font-semibold text-sm">
                Learn more about digital tickets
              </div>
              <div>▶</div>
            </button>
          </div>
          <Image
            src={videoThumbnail}
            width={360}
            height={150}
            alt="Video Thumbnail"
          />
        </div>
      </section>
      <section className="bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-yellow-300 text-4xl uppercase font-semibold py-16">
            Luxury Suites
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4">
            <ImageWithText image={EBS4} text="Eide Bailly Suite Level" />
            <ImageWithText image={udoLounge} text="Level 3 Udo Lounge" />
            <ImageWithText image={logeBox} text="Loge Boxes" />
            <ImageWithText image={courtsideSuite} text="Courtside Suites" />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="max-w-6xl mx-auto pb-24">
          <h2 className="text-yellow-300 text-4xl uppercase font-semibold py-16">
            Exclusive Clubs
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
            <ImageWithText image={toyotaClub} text="Toyota Club" />
            <ImageWithText image={eideBaillyClub} text="Eide Bailly Club" />
            <ImageWithText image={WCF} text="WCF Insurance Club" />
            <ImageWithText image={lexusClub} text="Lexus Club" />
            <ImageWithText
              image={courtsideClub2}
              text="Courtside Club"
              subtext="Presented by Entrata"
            />
            <ImageWithText
              image={legendsClub}
              text="Legends Club"
              subtext="Presented By LGCY Power"
            />
          </div>
        </div>
      </section>
      <section className="bg-neutral-800">
        <div className="max-w-6xl mx-auto text-white pt-8 pb-16">
          <h2 className="text-3xl text-white py-8 font-bold uppercase">
            Contact Us
          </h2>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <Image
                  src={phone}
                  width={24}
                  height={24}
                  alt="Phone Number"
                  className="bg-yellow-300 rounded-md"
                />
                <p>801 - 325 - 2105</p>
              </div>
              <div className="flex gap-2 items-center -ml-1">
                <Image src={mail} width={32} height={32} alt="Email" />
                <p>bizdev@utahjazz.com</p>
              </div>
              <p>
                With options like single-game tickets, suite rentals and special
                group rates, experiencing Utah Jazz basketball has never been
                more convenient! Just let us know what you’re interested in and
                we can customize a package to fit your group and budget.
              </p>
            </div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label htmlFor="input">User Input</label>
                <input
                  type="text"
                  className="rounded-tr rounded-bl py-1 text-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="input">User Input</label>
                <input
                  type="text"
                  className="rounded-tr rounded-bl py-1 text-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="input">User Input</label>
                <input
                  type="text"
                  className="rounded-tr rounded-bl py-1 text-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="input">Options</label>
                <select className="rounded-tr rounded-bl text-black py-2 px-2 border-r-8 border-r-transparent">
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
                  className="rounded-tr rounded-bl py-2 resize-none text-black"
                />
              </div>
              <button
                type="button"
                className="rounded-md bg-yellow-300 border border-black px-8 py-2 max-w-fit h-fit cursor-pointer flex justify-between items-center gap-2 text-black uppercase font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
