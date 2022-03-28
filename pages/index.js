import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ImageWithText from "../components/ImageWithText";
import ImageCard from "../components/ImageCard";
import ButtonOutline from "../components/Button";
import DigitalTickets from "../components/DigitalTickets";
import Contact from "../components/Contact";

import courtsideSuite from "../assets/images/JAZ2122_Premium_CourtsideSuite1.jpg";
import courtsideClub from "../assets/images/JAZ2122_Premium_CourtsideClub1.jpg";
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

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <div className="bg-black">
        <nav className="spacing text-white">
          <div className="border-b flex items-center justify-between py-2">
            <Link href="/" passHref>
              <a className="flex max-w-fit items-center gap-4">
                <Image src={jazzIcon} width={42} height={42} alt="Jazz Icon" />
                <h3 className="uppercase text-sm">Utah Jazz Premium Seating</h3>
              </a>
            </Link>
            <ol className="flex gap-10 text-jazz-yellow text-xs">
              <li>
                <Link href="/#luxury-suites">Luxury Suites</Link>
              </li>
              <li>
                <Link href="/#exclusive-clubs">Exclusive Clubs</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Us</Link>
              </li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Hero */}

      <section className="bg-black">
        <div className="spacing py-24 pb-32 flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl text-white font-semibold uppercase">
            Premium Seating
          </h1>
          <h2 className="text-jazz-yellow uppercase text-3xl pb-2">
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
          <Link href="/#contact" passHref>
            <a className="whitespace-nowrap">
              <ButtonOutline text="Contact Us" isYellow={true} />
            </a>
          </Link>
        </div>
      </section>

      {/* Cards */}

      <section className="mb-16">
        <div className="spacing flex justify-center gap-5 -mt-16">
          <ImageCard
            image={courtsideSuite}
            title="Luxury Suites"
            text="Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder."
            destination="/#luxury-suites"
          />
          <ImageCard
            image={courtsideClub}
            title="Exclusive Clubs"
            text="Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena."
            destination="/#exclusive-clubs"
          />
        </div>
      </section>

      {/* Digital Tickets */}
      <DigitalTickets />

      {/* Luxury Suites */}

      <section className="bg-black" id="luxury-suites">
        <div className="spacing">
          <h2 className="text-jazz-yellow text-3xl uppercase font-semibold py-16">
            Luxury Suites
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-4">
            <Link href="/EideBaillySuiteLevel" passHref>
              <a>
                <ImageWithText image={EBS4} text="Eide Bailly Suite Level" />
              </a>
            </Link>
            <ImageWithText image={udoLounge} text="Level 3 Udo Lounge" />
            <ImageWithText image={logeBox} text="Loge Boxes" />
            <ImageWithText image={courtsideSuite} text="Courtside Suites" />
          </div>
        </div>
      </section>

      {/* Exclusive Clubs */}

      <section className="bg-black" id="exclusive-clubs">
        <div className="spacing pb-24">
          <h2 className="text-jazz-yellow text-3xl uppercase font-semibold py-12 pt-16">
            Exclusive Clubs
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-7 gap-y-4">
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

      {/* Contact */}
      <Contact />
    </>
  );
}
