import React from "react";
import bg from "../../../public/assets/event/join-us-bg.jpg";
import Link from "next/link";

type JoinUsProps = {};

const JoinUs: React.FC<JoinUsProps> = () => {
  return (
    <section
      className="min-h-[400.688px] "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full absolute left-0 top-0 bg-black opacity-75 z-10"></div>
      <div className="common relative z-10 text-white">
        <div className="text-center max-w-[600px] mx-auto">
          <h5 className=" text-[17px] font-bold mb-5">Join Us</h5>
          <h3 className="text-[42px] mb-5 font-bold">Become a Blood Donator</h3>
          <p className="leading-6 mb-[30px]">
            Blood is a body fluid in humans and other animals that delivers
            necessary substances such as nutrients and oxygen to the cells and
            transports metabolic waste products away from those same cells.
          </p>
          <Link
            href={"/contact"}
            className="bg-white text-[#ea062b] px-[36px] py-[18px] rounded "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default JoinUs;
