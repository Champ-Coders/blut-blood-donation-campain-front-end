import { Breadcrumb } from "antd";
import Link from "next/link";
import BannerImage from "../../../public/assets/donor_profile_cover.png";

const BannerBreadcrumb = ({
  items,
  title,
}: {
  items: {
    label: string;
    link?: string;
  }[];
  title?: string;
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <p className="text-white text-base">Home</p>
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span className="text-white text-base">{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className=" bg-blend-lighten bg-opacity-50 flex flex-col md:flex-row justify-around items-center gap-5 md:py-[100px] py-[70px] "
    >
      <div className="font-roboto">
        <h1 className="text-white text-5xl font-bold mb-2">{title}</h1>
        <Breadcrumb
          items={breadCrumbItems}
          style={{
            color: "white",
          }}
        />
      </div>
      <div className=" text-center text-white md:text-[#333] font-kalpurush">
        <p className="font-bold text-[38px]">সম্মানিত রক্তদাতা</p>
        <p className="font-bold md:text-primary text-white text-[42px]">
          আপনাদের প্রতি কৃতজ্ঞতা
        </p>
        <p>
          আপনারা নিঃস্বার্থভাবে রক্তদান করায় আমরা{" "}
          <span className="font-bold">১৫ লক্ষেরও বেশি</span> ইউনিট রক্ত ও রক্ত
          উপাদান
        </p>
        <p>সরবরাহ করে লক্ষ জীবন বাঁচাতে পেরেছি ।</p>
      </div>
    </div>
  );
};

export default BannerBreadcrumb;
