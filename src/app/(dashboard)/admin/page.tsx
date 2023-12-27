import DashboardCard from "@/components/DashboardCard/DashboardCard";
import DashboardChart from "@/components/DashboardChart/DashboardChart";
import RecentDonationCard from "@/components/RecentDonationCard/RecentDonationCard";
import React from "react";

type AdminPageProps = {
  title: string;
  date: string;
  total: string;
  backgroundColor: string;
  textColor: string;
};

const Data: AdminPageProps[] = [
  {
    title: "Requests",
    date: "15 Dec 2023",
    total: "10",
    backgroundColor: "#C5DCFF",
    textColor: "#5483CA",
  },
  {
    title: "Received",
    date: "15 Dec 2023",
    total: "15",
    backgroundColor: "#FFC5DA",
    textColor: "#CA5462",
  },
  {
    title: "In Stock",
    date: "15 Dec 2023",
    total: "12",
    backgroundColor: "#CDFFC5",
    textColor: "#54CA8A",
  },
];

//  Image, name, date, BloodGroup;

const RecentDonation = [
  {
    image: "https://picsum.photos/200/300",
    name: "Md Mahafujur Rahaman Masud",
    date: "15 Dec 2023",
    bloodGroup: "A+",
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Mahabub Rahaman",
    date: "15 Dec 2023",
    bloodGroup: "B+",
  },
  {
    image: "https://picsum.photos/id/237/200/300",
    name: "John Doe",
    date: "15 Dec 2023",
    bloodGroup: "A+",
  },
  {
    image: "https://picsum.photos/200/300",
    name: "John Doe",
    date: "15 Dec 2023",
    bloodGroup: "A+",
  },
  {
    image: "https://picsum.photos/200/300",
    name: "John Doe",
    date: "15 Dec 2023",
    bloodGroup: "A+",
  },
];

const AdminPage = () => {
  return (
    <div className="commonAdmin">
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
        {Data?.map((item, i) => {
          return <DashboardCard key={i} item={item} />;
        })}
      </div>
      {/* card end */}

      {/* recent donations , Analysis  */}

      <div className="my-[30px] md:flex justify-between gap-10">
        {/* Recent Donations */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-[24px] font-semibold font-playfair">
              Recent Donations
            </h5>
            {/* <p className="font-oswald text-[16px] font-medium ">See All</p> */}
          </div>

          {/* table => Image,name,date ,BloodGroup */}

          <div className="flex flex-col gap-3">
            {RecentDonation.map((data, i) => (
              <RecentDonationCard key={i} recentDonation={data} />
            ))}
          </div>
        </div>

        {/* Analysis */}

        <div>
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-[24px] font-semibold font-playfair">
              Analysis
            </h5>
          </div>
          {/* Analysis */}
          <DashboardChart />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
