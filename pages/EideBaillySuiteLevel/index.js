/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DigitalTickets from "../../components/DigitalTickets";
import Contact from "../../components/Contact";
import ButtonOutline, { ButtonSolid } from "../../components/Button";

import EBS2 from "../../assets/images/JAZ2122_Premium_EBS2.jpg";
import EBS4 from "../../assets/images/JAZ2122_Premium_EBS4.jpg";
import EBS5 from "../../assets/images/JAZ2122_Premium_EBS5.jpg";

import jazzIcon from "../../assets/images/jazzIcon.png";
import downloadIcon from "../../assets/images/downloadIcon.png";
import infoIcon from "../../assets/images/infoIcon.svg";
import locationIcon from "../../assets/images/locationIcon.png";
import capacityIcon from "../../assets/images/capacityIcon.png";
import bulbIcon from "../../assets/images/bulbIcon.png";
import carIcon from "../../assets/images/carIcon.png";
import signpostIcon from "../../assets/images/signpostIcon.png";
import checkmarkIcon from "../../assets/images/checkmarkIcon.png";
import plusIcon from "../../assets/images/plusIcon.png";

function EideBaillySuiteLevel() {
  return (
    <>
      <Head>
        <title>Eide Bailly Suite Level</title>
      </Head>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.75, ease: [0.61, 1, 0.88, 1] },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.75, ease: [0.61, 1, 0.88, 1] },
        }}
      >
        {/* Navbar */}

        <div className="bg-black border-t">
          <nav className="px-8 md:spacing text-white flex items-center justify-between gap-8">
            <Link href="/" passHref>
              <a className="flex max-w-fit items-center gap-3 shrink-0 py-1.5">
                <Image src={jazzIcon} width={48} height={48} alt="Jazz Icon" />
                <h3 className="uppercase text-md hidden sm:block mt-2">
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
                <Link href="/EideBaillySuiteLevel/#contact">Contact Us</Link>
              </li>
            </ol>
          </nav>
        </div>

        {/* Header Banner */}
        <section>
          <div className="px-12 md:spacing flex flex-wrap text-center md:text-left md:flex-nowrap justify-center md:justify-between items-center py-3 md:py-8 gap-x-8 md:gap-8">
            <h1 className="text-4xl font-bold uppercase">
              Eide Bailly Suite Level
            </h1>
            <div className="flex gap-8">
              <ButtonOutline
                isYellow={false}
                text="Download Info"
                icon={downloadIcon}
              />
              <Link href="/EideBaillySuiteLevel/#contact" passHref>
                <a>
                  <ButtonOutline isYellow={false} text="Contact Us" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination
            className="w-full h-[450px] relative"
          >
            <SwiperSlide>
              <Image
                src={EBS2}
                layout="fill"
                alt="Eide Bailly Suite"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={EBS4}
                layout="fill"
                alt="Eide Bailly Suite"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={EBS5}
                layout="fill"
                alt="Eide Bailly Suite"
                objectFit="cover"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Info Banner */}
        <section className="bg-jazz-yellow">
          <div className="px-4 md:spacing flex gap-4 py-4 items-center">
            <div className="shrink-0 py-6">
              <Image src={infoIcon} width={48} height={48} alt="Information" />
            </div>
            <p className="font-bold text-lg">
              Did you know? Whether you're closing an important business deal or
              celebrating with your employees, renting a suite for a Jazz game
              is perfect for any occasion. Call or text 801.325.2203 to learn
              more.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-black">
          <div className="px-12 md:spacing flex flex-col text-white">
            {/* About Section */}

            <div className="flex flex-col items-center sm:grid sm:grid-rows-4 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-5 border-b py-4 md:py-12 pr-10">
              <h2 className="self-center font-bold md:self-start justify-self-center md:justify-self-start col-span-1 text-3xl py-6 md:py-0">
                About
              </h2>
              <div className="col-span-4 gap-x-12 flex flex-col gap-y-12 ml-12 sm:ml-0 sm:flex-row justify-between row-span-3">
                <div className="flex">
                  <div className="mt-1 mx-2 shrink-0">
                    <Image
                      src={locationIcon}
                      width={24}
                      height={24}
                      alt="Location"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">Location</h2>
                    <p className="text-lg">Suite Level (Level 4)</p>
                    <ButtonSolid text="View Arena Map" isSmall={true} />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-2 shrink-0">
                    <Image
                      src={capacityIcon}
                      width={32}
                      height={32}
                      alt="Capacity"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">Capacity</h2>
                    <p className="text-lg">
                      Accommodates 18 - 32 <br /> people
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-2 mt-1 shrink-0">
                    <Image
                      src={bulbIcon}
                      width={24}
                      height={24}
                      alt="Event Availability"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold">Event Availability</h2>
                    <div className="text-lg">
                      <p>Utah Jazz Games</p>
                      <p>(including playoffs)</p>
                    </div>
                    <p className="text-lg">
                      Concerts and select <br /> special events
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits & Amenities Section */}

            <div className="flex flex-col items-center md:items-start sm:grid sm:grid-rows-3 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-5 border-b py-4 md:py-12 lg:pr-10 md:gap-x-8 lg:gap-x-24">
              <h2 className="self-center font-bold text-center md:text-left md:self-start row-span-1 justify-self-center md:justify-self-start col-span-1 text-3xl py-6 md:py-0">
                Benefits & Amenities
              </h2>
              <div className="flex flex-col col-span-2 row-span-2 ml-[10%] lg:ml-0 xl:pr-20 gap-5 text-md pb-5 md:pb-0">
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>Private Suite</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>420 - 490 square feet depending on the location</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>
                    Lounge seating area for four with coffee table at the back
                    of suite
                  </p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>
                    High-top counter in middle, and drink rails at the back of
                    the fixed-seating area
                  </p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>Dedicated suite attendant for each game and arena event</p>
                </div>
              </div>
              <div className="flex flex-col col-span-2 ml-[10%] lg:ml-0 xl:pr-20 gap-5 text-md pb-5 md:pb-0">
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>Flat screen TV in each suite</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>WiFi access</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>18–32 tickets in a luxury suite (varies by location)</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>VIP parking passes</p>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2">
                    <Image
                      src={checkmarkIcon}
                      width={20}
                      height={20}
                      alt="Checkmark"
                    />
                  </div>
                  <p>
                    Food credit for catering to both Utah Jazz games and arena
                    events
                  </p>
                </div>
              </div>
            </div>

            {/* Parking Section */}

            <div className="flex flex-col items-center md:items-start sm:grid sm:grid-rows-3 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-5 border-b py-4 md:py-8 md:gap-x-8">
              <h2 className="self-center font-bold text-center md:text-left md:self-start row-span-1 justify-self-center md:justify-self-start col-span-1 text-3xl py-4 md:py-0">
                Parking & Check-In
              </h2>
              <div className="flex flex-col col-span-2 row-span-2 ml-[10%] lg:ml-0 xl:pr-24 gap-5 text-md pb-5 md:pb-0">
                <div className="flex">
                  <div className="mr-1 -mt-1 shrink-0">
                    <Image
                      src={carIcon}
                      width={32}
                      height={32}
                      alt="VIP Parking"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <p>
                      VIP parking in the Park Place lot located right next to
                      Vivint Smart Home Arena
                    </p>
                    <ButtonSolid text="View Parking Map" isSmall={true} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col col-span-2 row-span-2 ml-[10%] lg:ml-4 xl:pr-24 gap-5 text-md pb-5 md:pb-0">
                <div className="flex">
                  <div className="mr-2 shrink-0">
                    <Image
                      src={signpostIcon}
                      width={24}
                      height={24}
                      alt="Check-In Locations"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <p>
                      Easy check-in: Talk to the host at any suite level (level
                      4) entrance to check-in
                    </p>
                    <ButtonSolid
                      text="View Check-In Locations"
                      isSmall={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Possible Uses Section */}
            <div className="pb-12">
              <div className="flex items-center text-center sm:text-left justify-center md:justify-start pt-8 md:py-8 -ml-5 md:ml-0">
                <div className="shrink-0 mr-3 sm:mr-5 mt-2">
                  <Image
                    src={plusIcon}
                    width={28}
                    height={28}
                    alt="Possible Uses"
                  />
                </div>
                <h2 className="text-4xl font-bold">Possible Uses</h2>
              </div>
              <div className="flex flex-col text-center md:text-left items-center md:items-start sm:grid sm:grid-rows-2 sm:gap-y-4 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-5 md:gap-x-8 lg:gap-x-12">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mx-auto md:mx-0 border-b py-2">
                    Business <br /> Development
                  </h3>
                  <ul className="py-3 flex flex-col gap-3 md:gap-5 text-sm">
                    <li>Client Entertainment</li>
                    <li>Relationship Development</li>
                    <li>
                      Generate Referrals by Inviting Clients to Bring Colleagues
                      & Friends
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mx-auto md:mx-0 border-b py-2">
                    Client <br /> Retention
                  </h3>
                  <ul className=" py-3 flex flex-col gap-3 text-sm">
                    <li>Renew Accounts</li>
                    <li>Reduce Attrition</li>
                    <li>Relationship Development</li>
                    <li>Current Customer Upsell</li>
                    <li>New Product/Service Launch</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mx-auto md:mx-0 border-b py-2">
                    Employee <br /> Usage
                  </h3>
                  <ul className="py-3 flex flex-col gap-3 text-sm">
                    <li>Employee Recruitment & Retention</li>
                    <li>Employee Benefit Programs</li>
                    <li>Employee Incentives</li>
                    <li>Internal Contests</li>
                    <li>Team Building</li>
                    <li>Employee Families</li>
                    <li>Holiday Events/Parties</li>
                    <li>Conferences</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mx-auto md:mx-0 border-b py-2">
                    Executive <br /> Utilization
                  </h3>
                  <ul className="py-3 flex flex-col gap-3 text-sm">
                    <li>Executive Team Building</li>
                    <li>Quarterly Meetings</li>
                    <li>Investors & Shareholders</li>
                    <li>Personal Entertainment</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mx-auto md:mx-0 border-b py-2">
                    Community <br /> Relations
                  </h3>
                  <ul className="py-3 flex flex-col gap-3 text-sm pb-8">
                    <li>Complement Current Charitable Programs</li>
                    <li>Donate for Auctions or Raffles</li>
                    <li>Host 501(c)(3) Organizations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food and Beverage */}

        <section>
          <div className="w-screen h-[600px] relative">
            <Image
              src={EBS5}
              layout="fill"
              alt="Eide Bailly Suite"
              objectFit="cover"
            />
            <div className="bg-black absolute left-0 right-0 bottom-0 opacity-80 md:h-1/5 flex items-center py-4 sm:h-1/4">
              <p className="px-[5%] sm:spacing text-white text-center text-xl leading-6 lg:px-48">
                Tailor your food and beverage experience to your group each
                night. Choose from an expansive menu based on who you will be
                hosting for that event. Submit your food and beverage orders 2
                business days prior to the event. Access to your suite and food
                service will start 90 minutes prior to tipoff
              </p>
            </div>
          </div>
        </section>

        {/* DigitalTickets */}
        <DigitalTickets />

        {/* Contact */}
        <Contact />
      </motion.div>
    </>
  );
}

export default EideBaillySuiteLevel;
