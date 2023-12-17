import { Breadcrumb } from "antd";
import Link from "next/link";

const BannerBreadcrumb = ({
  items,
  title,
  image,
}: {
  items: {
    label: string;
    link?: string;
  }[];
  title?: string;
  image: string;
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
          <span className="text-red-600 text-base">{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 50vw rgba(0, 0, 0, 0.5)",
      }}
      className="h-[200px] md:h-[400px] flex flex-col items-center justify-center bg-blend-lighten "
    >
      <h1 className="text-white text-5xl font-bold mb-2">{title}</h1>
      <Breadcrumb items={breadCrumbItems} />
    </div>
  );
};

export default BannerBreadcrumb;
