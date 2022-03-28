/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

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
      {/* Navbar */}

      <div className="bg-black">
        <nav className="spacing text-white py-1 flex items-center justify-between">
          <Link href="/" passHref>
            <a className="flex max-w-fit items-center gap-4">
              <Image src={jazzIcon} width={45} height={45} alt="Jazz Icon" />
              <h3 className="uppercase">Utah Jazz Premium Seating</h3>
            </a>
          </Link>
          <ol className="flex gap-12 text-jazz-yellow text-sm">
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
        <div className="spacing flex justify-between items-center py-6">
          <h1 className="text-4xl font-bold uppercase">
            Eide Bailly Suite Level
          </h1>
          <div className="flex gap-8">
            <ButtonOutline
              isYellow={false}
              text="Download Info"
              icon={downloadIcon}
            />
            <ButtonOutline isYellow={false} text="Contact Us" />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section>
        <div className="w-screen h-[450px] relative">
          <Image
            src={EBS2}
            layout="fill"
            alt="Eide Bailly Suite"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-jazz-yellow">
        <div className="spacing flex gap-4 py-6">
          <Image src={infoIcon} width={80} height={80} alt="Jazz Icon" />
          <p className="font-bold text-lg">
            Did you know? Whether you're closing an important business deal or
            celebrating with your employees, renting a suite for a Jazz game is
            perfect for any occasion. Call or text 801.325.2203 to learn more.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-black">
        <div className="spacing flex flex-col text-white">
          {/* About Section */}

          <div className="grid grid-cols-5 border-b py-12">
            <h2 className="col-span-1 text-3xl font-semibold">About</h2>
            <div className="col-span-4 flex justify-between">
              <div className="flex">
                <div className="mt-2 mr-2">
                  <Image
                    src={locationIcon}
                    width={24}
                    height={24}
                    alt="Location"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl">Location</h2>
                  <p>Suite Level (Level 4)</p>
                  <ButtonSolid text="View Arena Map" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <Image
                    src={capacityIcon}
                    width={32}
                    height={32}
                    alt="Capacity"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl">Capacity</h2>
                  <p>Accommodates 18 - 32 people</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-2 mt-1">
                  <Image
                    src={bulbIcon}
                    width={24}
                    height={24}
                    alt="Event Availability"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl">Event Availability</h2>
                  <div>
                    <p>Utah Jazz Games</p>
                    <p>(including playoffs)</p>
                  </div>
                  <p>Concerts and select special events</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & Amenities Section */}

          <div className="grid grid-cols-5 border-b py-10">
            <h2 className="col-span-1 text-3xl font-semibold">
              Benefits & Amenities
            </h2>
            <div className="flex flex-col col-span-2 pr-32 gap-6">
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
                  Lounge seating area for four with coffee table at the back of
                  suite
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
                  High-top counter in middle, and drink rails at the back of the
                  fixed-seating area
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
            <div className="flex flex-col gap-6 col-span-2 pr-32">
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

          <div className="grid grid-cols-5 border-b py-10">
            <h2 className="col-span-1 text-3xl font-semibold">
              Parking & Check-In
            </h2>
            <div className="col-span-2 pr-32">
              <div className="flex">
                <div className="mr-2 -mt-1 -ml-2">
                  <Image
                    src={carIcon}
                    width={64}
                    height={64}
                    alt="VIP Parking"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <p>
                    VIP parking in the Park Place lot located right next to
                    Vivint Smart Home Arena
                  </p>
                  <ButtonSolid text="View Parking Map" />
                </div>
              </div>
            </div>
            <div className="col-span-2 pr-32">
              <div className="flex">
                <div className="mt-1 mr-3 -ml-1">
                  <Image
                    src={signpostIcon}
                    width={48}
                    height={48}
                    alt="Check-In Locations"
                  />
                </div>
                <div className=" flex flex-col gap-8 ">
                  <p>
                    Easy check-in: Talk to the host at any suite level (level 4)
                    entrance to check-in
                  </p>
                  <ButtonSolid text="View Check-In Locations" />
                </div>
              </div>
            </div>
          </div>

          {/* Possible Uses Section */}
          <div className="py-4 pb-12">
            <div className="flex items-center">
              <div className="shrink-0 mr-6 mt-2">
                <Image
                  src={plusIcon}
                  width={32}
                  height={32}
                  alt="Possible Uses"
                />
              </div>
              <h2 className="text-4xl font-semibold py-8">Possible Uses</h2>
            </div>
            <div className="grid grid-cols-5 gap-12">
              <div className="flex flex-col">
                <h3 className="text-2xl border-b py-2">
                  Business <br /> Development
                </h3>
                <ul className="font-extralight py-4 flex flex-col gap-4 text-sm">
                  <li>Client Entertainment</li>
                  <li>Relationship Development</li>
                  <li>
                    Generate Referrals by Inviting Clients to Bring Colleagues &
                    Friends
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl border-b py-2">
                  Client <br /> Retention
                </h3>
                <ul className="font-extralight py-4 flex flex-col gap-2 text-sm">
                  <li>Renew Accounts</li>
                  <li>Reduce Attrition</li>
                  <li>Relationship Development</li>
                  <li>Current Customer Upsell</li>
                  <li>New Product/Service Launch</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl border-b py-2">
                  Employee <br /> Usage
                </h3>
                <ul className="font-extralight py-4 flex flex-col gap-2 text-sm">
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
                <h3 className="text-2xl border-b py-2">
                  Executive <br /> Utilization
                </h3>
                <ul className="font-extralight py-4 flex flex-col gap-2 text-sm">
                  <li>Executive Team Building</li>
                  <li>Quarterly Meetings</li>
                  <li>Investors & Shareholders</li>
                  <li>Personal Entertainment</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl border-b py-2">
                  Community <br /> Relations
                </h3>
                <ul className="font-extralight py-4 flex flex-col gap-2 text-sm">
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
          <div className="bg-black absolute left-0 right-0 bottom-0 opacity-80 h-1/5 flex items-center px-64">
            <p className="spacing text-white text-center text-lg leading-6">
              Tailor your food and beverage experience to your group each night.
              Choose from an expansive menu based on who you will be hosting for
              that event. Submit your food and beverage orders 2 business days
              prior to the event. Access to your suite and food service will
              start 90 minutes prior to tipoff
            </p>
          </div>
        </div>
      </section>

      {/* DigitalTickets */}
      <DigitalTickets />

      {/* Contact */}
      <Contact />
    </>
  );
}

export default EideBaillySuiteLevel;