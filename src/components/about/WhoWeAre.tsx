import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import whoWeAre from "../../../public/assets/about/who-we-are.png";

type WhoWeAreProps = {};

const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <section className="py-7 lg:py-[116px]">
      <div className="common">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div>
            <h2 className="text-2xl lg:text-5xl text-[#111] mt-3 mb-[17px] capitalize font-bold">
              who we are
            </h2>
            <h5 className="text-xl lg:text-2xl text-[#111]  mb-7 font-bold">
              We are here not for income, but for outcome
            </h5>
            <p className="text-lg text-[#666] mb-7">
              Which is the same as saying through shrinking from toil and pain.
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when untrammelled and when nothing prevents through
              shrinking from toil and pain. These cases are
            </p>
            <Button className="font-bold" type={"button"}>
              Explore Now
            </Button>
          </div>
          <div>
            <Image src={whoWeAre} width={518} height={335} alt="how we are" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAre;
