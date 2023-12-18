import { PhoneFilled, MailFilled } from "@ant-design/icons";
import { FaPhone,FaLocationDot,FaEnvelope } from "react-icons/fa6";


const CallNow = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dyy4n4fmh/image/upload/v1702731618/call_mvw3tp.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 0,
        }}
        className={`bg-cover h-auto sm:h-[504px] relative py-[90px]`}
      >
        <div className="absolute  h-auto inset-0 bg-black/80"></div>
        <div className="w-full h-full font-poppins flex justify-center items-center">
          <div className="container group mx-auto px-4 max-w-[1130px]">
            <div className="py-[70px] text-white border-[5px] sm:border-[10px] border-primary relative text-center block">
              <span className="w-[78px] h-[78px] transition duration-300 ease-in group-hover:rotate-0 rotate-45 -top-[45px] absolute left-[50%] -translate-x-[50%] inline-flex justify-center items-center  bg-primary group-hover:bg-white group-hover:text-primary text-white text-center">
                <span className="-rotate-45 group-hover:rotate-0 text-2xl">
                  <FaPhone />
                </span>
              </span>
              <p className="mb-4 mt-2 font-medium uppercase">START DONATING</p>
              <h1 className="mb-4 font-bold text-3xl sm:text-5xl leading-[66px]">
                Call Now: (+880)123456789
              </h1>
              <div className="flex justify-center flex-col sm:flex-row items-center gap-5">
                <p className="text-sm sm:text-base transition duration-300 ease-in flex justify-center items-center gap-2 group-hover:text-primary">
                <FaLocationDot />
                  Dhaka, Bangladesh
                </p>
                <p className="text-sm sm:text-base transition duration-300 ease-in  flex justify-center items-center gap-2 group-hover:text-primary">
                <FaEnvelope />
                  donate@gamil.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallNow;
