import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ImageWithText from "../components/ImageWithText";
import ImageCard from "../components/ImageCard";
import ButtonOutline from "../components/Button";
import DigitalTickets from "../components/DigitalTickets";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Premium Seating</title>
      </Head>
      <motion.div
        initial={{ filter: "brightness(0%)" }}
        animate={{
          filter: "brightness(100%)",
          transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1] },
        }}
        exit={{
          filter: "brightness(0%)",
        }}
      >
        {/* Navbar */}
        <div className="bg-black border-t">
          <nav className="px-16 sm:spacing text-white">
            <div className="border-b flex items-center justify-between gap-8">
              <Link href="/" passHref>
                <a className="flex max-w-fit items-center gap-3 shrink-0">
                  <div>
                    <Image
                      src="/jazzIcon.png"
                      width={48}
                      height={48}
                      alt="Jazz Icon"
                    />
                  </div>
                  <h3 className="uppercase text-lg hidden sm:block">
                    Utah Jazz Premium Seating
                  </h3>
                </a>
              </Link>
              <ol className="flex gap-10 text-jazz-yellow text-sm">
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
            <h1 className="text-6xl text-white font-bold uppercase text-center">
              Premium Seating
            </h1>
            <h2 className="text-jazz-yellow uppercase text-4xl pb-2 text-center">
              The best way to enjoy all the excitement
            </h2>
            <p className="text-white text-center text-lg">
              Whether you’re entertaining business clients, closing a major
              deal, or socializing with family and friends, a luxury suite
              provides all the convenience, comfort and service you desire. As
              the home of the Utah Jazz and the country’s most popular touring
              musical acts and family shows, Vivint Arena is the place to meet,
              greet, see and be seen in Utah.
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
          <div className="spacing grid place-content-center lg:flex justify-center gap-5 -mt-16">
            <ImageCard
              image="/JAZ2122_Premium_CourtsideSuite1.jpg"
              title="Luxury Suites"
              text="Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder."
              destination="/#luxury-suites"
            />
            <ImageCard
              image="/JAZ2122_Premium_CourtsideClub1.jpg"
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
          <div className="spacing pb-8">
            <h2 className="text-jazz-yellow text-4xl uppercase py-16 font-bold">
              Luxury Suites
            </h2>
            <div className="grid sm:grid-cols-2 grid-rows-2 gap-x-7 gap-y-4">
              <Link href="/EideBaillySuiteLevel" passHref>
                <a>
                  <ImageWithText
                    image="/JAZ2122_Premium_EBS4.jpg"
                    text="Eide Bailly Suite Level"
                  />
                </a>
              </Link>
              <ImageWithText
                image="/JAZ2122_Premium_UdoLounge1.jpg"
                text="Level 3 Udo Lounge"
              />
              <ImageWithText
                image="/JAZ2122_Premium_LogeBox1.jpg"
                text="Loge Boxes"
              />
              <ImageWithText
                image="/JAZ2122_Premium_CourtsideSuite1.jpg"
                text="Courtside Suites"
              />
            </div>
          </div>
        </section>

        {/* Exclusive Clubs */}

        <section className="bg-black" id="exclusive-clubs">
          <div className="spacing pb-24">
            <h2 className="text-jazz-yellow text-4xl uppercase py-12 pt-12 font-bold">
              Exclusive Clubs
            </h2>
            <div className="grid sm:grid-cols-2 grid-rows-3 gap-x-7 gap-y-4">
              <ImageWithText
                image="/JAZ2122_Premium_ToyotaClub7.jpg"
                text="Toyota Club"
              />
              <ImageWithText
                image="/JAZ2122_Premium_EBC1.jpg"
                text="Eide Bailly Club"
              />
              <ImageWithText
                image="/JAZ2122_Premium_WCF4.jpg"
                text="WCF Insurance Club"
              />
              <ImageWithText
                image="/JAZ2122_Premium_Lexus2.jpg"
                text="Lexus Club"
              />
              <ImageWithText
                image="/JAZ2122_Premium_CourtsideClub26.jpg"
                text="Courtside Club"
                subtext="Presented by Entrata"
              />
              <ImageWithText
                image="/JAZ2122_Premium_Legends1.jpg"
                text="Legends Club"
                subtext="Presented By LGCY Power"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </motion.div>
    </>
  );
}
