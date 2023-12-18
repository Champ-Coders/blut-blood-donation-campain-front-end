import one from "../../assets/popularCamp//blood-donation-group.png";
import { FaCalendarDays, FaClock, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { popularCamps } from "@/constants/PopulerCam";

const PopularCampaigns = () => {
  return (
    <div className="bg-[#f5f5f5] py-10 sm:py-24">
      <div className="text-center mb-5 sm:mb-10">
        <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
          DONATE NOW
        </h3>
        <h1 className="text-black font-[800] text-3xl sm:text-5xl">
          Popular Campaigns
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl flex justify-center items-center gap-8 px-5 md:px-14 lg:px-20">

   

        <div className="flex justify- h-[280px] bg-white flex-row gap-3">
          <div className="w-[45%]">
            <Image className="h-full" src={one} width={300} height={400} alt="imge" />
          </div>
          <div className="w-[55%] px-5 py-6 flex flex-col justify-between items-start">
            {/* date */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary">
                <FaCalendarDays />
              </span>
              <p className="text-gray-600 text-sm font-bold font-roboto">
                14 February, 2023
              </p>
            </div>
            {/* content */}
            <div>
              <h2 className="text-[22px] font-bold font-roboto text-black my-2">
                Blood Donation Camp
              </h2>
              <p className="text-base text-gray-700 leading-8 mb-5">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                incididunt et dolore magna sit consectetur.
              </p>
            </div>
            {/* time  slot */}
            <div className="flex items-center gap-5">
              <div className="flex  items-center gap-2">
                <span className="text-sm text-primary">
                  <FaClock />
                </span>
                <p className="text-gray-600 font-bold text-sm font-roboto">
                  11.00 - 4.00
                </p>
              </div>
              <div className="flex  items-center gap-2">
                <span className="text-sm text-primary">
                  <FaLocationDot />
                </span>
                <p className="text-gray-600 font-bold text-sm font-roboto">
                  14 Dhaka, BD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify- h-[280px] bg-white flex-row gap-3">
          <div className="w-[45%]">
            <Image className="h-full" src={one} width={300} height={400} alt="imge" />
          </div>
          <div className="w-[55%] px-5 py-6 flex flex-col justify-between items-start">
            {/* date */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary">
                <FaCalendarDays />
              </span>
              <p className="text-gray-600 font-bold text-sm font-roboto">
                14 February, 2023
              </p>
            </div>
            {/* content */}
            <div>
              <h2 className="text-[22px] font-bold font-roboto text-black my-2">
                Blood Donation Camp
              </h2>
              <p className="text-base text-gray-700 leading-8 mb-5">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                incididunt et dolore magna sit consectetur.
              </p>
            </div>
            {/* time  slot */}
            <div className="flex items-center gap-5">
              <div className="flex  items-center gap-2">
                <span className="text-sm text-primary">
                  <FaClock />
                </span>
                <p className="text-gray-600 font-bold text-sm font-roboto">
                  11.00 - 4.00
                </p>
              </div>
              <div className="flex  items-center gap-2">
                <span className="text-sm text-primary">
                  <FaLocationDot />
                </span>
                <p className="text-gray-600 font-bold text-sm font-roboto">
                  14 Dhaka, BD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularCampaigns;
