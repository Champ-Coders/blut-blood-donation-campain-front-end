import { FaCalendarDays, FaClock, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { popularCamps } from "@/constants/PopulerCam";
import { IPopularCamp } from "@/interfaces/common";

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
      <div className="container mx-auto max-w-7xl flex justify-center sm:flex-row flex-col py-4 items-center gap-8 px-5 md:px-14 lg:px-20">
        {popularCamps.map((camp: IPopularCamp) => (
          <div
            key={camp.title}
            className="flex justify-between group relative min-h-[280px] bg-white flex-col lg:flex-row gap-3"
          >
            <div className="lg:w-[45%] px-5 pt-5 lg:p-0 bg-cover bg-no-repeat">
             <div className="overflow-hidden h-full">
             <Image
                className="h-full w-full transition duration-300 ease-in-out  group-hover:scale-110"
                src={camp.image}
                width={300}
                height={500}
                alt="image"
              />
             </div>
            </div>
            <div className="lg:w-[55%] px-5 py-6 flex flex-col justify-between items-start">
              {/* date */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary">
                  <FaCalendarDays />
                </span>
                <p className="text-gray-600 text-xs sm:text-sm font-bold font-roboto">
                  {camp.date}
                </p>
              </div>
              {/* content */}
              <div>
                <h2 className="text-xl sm:text-[22px] group-hover:text-primary font-bold font-roboto text-black my-2">
                  {camp.title}
                </h2>
                <p className="text-base text-gray-700 leading-8 mb-5">
                  {camp.des}
                </p>
              </div>
              {/* time  slot */}
              <div className="flex items-center gap-5">
                <div className="flex  items-center gap-2">
                  <span className="text-xs sm:text-sm text-primary">
                    <FaClock />
                  </span>
                  <p className="text-gray-600 font-bold text-xs sm:text-sm font-roboto">
                    {camp.timeSlot}
                  </p>
                </div>
                <div className="flex  items-center gap-2">
                  <span className="text-sm text-primary">
                    <FaLocationDot />
                  </span>
                  <p className="text-gray-600 font-bold text-xs sm:text-sm font-roboto">
                    {camp.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularCampaigns;
