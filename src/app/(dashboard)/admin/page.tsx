"use client";

import LoadingPage from "@/app/loading";
import DashboardCard from "@/components/DashboardCard/DashboardCard";

import DashboardChart from "@/components/DashboardChart/DashboardChart";
import PieChartExample from "@/components/DashboardChart/PieChart";
import RadarChartExample from "@/components/DashboardChart/RadarChartExample";

import RecentDonationCard from "@/components/RecentDonationCard/RecentDonationCard";
import { useGetAllDonationInfoQuery } from "@/redux/Api/AuthApi";

type AdminPageProps = {
  title: string;
  date: string;
  total: number;
  backgroundColor: string;
  textColor: string;
};

const Data: AdminPageProps[] = [
  {
    title: "Requests",
    date: "15 Dec 2023",
    total: Math.floor(Math.random() * 5000) + 1000,
    backgroundColor: "#C5DCFF",
    textColor: "#5483CA",
  },
  {
    title: "Received",
    date: "15 Dec 2023",
    total: Math.floor(Math.random() * 5000) + 1000,
    backgroundColor: "#FFC5DA",
    textColor: "#CA5462",
  },
  {
    title: "In Stock",
    date: "15 Dec 2023",
    total: Math.floor(Math.random() * 5000) + 1000,
    backgroundColor: "#CDFFC5",
    textColor: "#54CA8A",
  },
];

const AdminPage = () => {
  const query: Record<string, any> = {};

  query["limit"] = 100;
  query["page"] = 1;

  const { data: donation, isLoading } = useGetAllDonationInfoQuery({
    ...query,
  });

  // provide donation.data  last index 5 and ignore donnerId === undefined or null aslo ignore same item.name

  const lastFiveIndexData = donation?.data
    ?.slice(13, 18)
    ?.filter((item: any) => {
      return item?.donnerId !== undefined || null;
    });

  return (
    <div className="commonAdmin">
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-between gap-5">
        {Data?.map((item, i) => {
          return <DashboardCard key={i} item={item} />;
        })}
      </div>
      {/* card end */}

      {/* recent donations , Analysis  */}
      <div className="my-[30px] md:grid grid-cols-12 justify-start items-start gap-10">
        {/* Recent Donations */}
        <div className="col-span-12 lg:col-span-4  h-full p-2 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-[24px] font-semibold font-playfair">
              Recent Donations
            </h5>
            {/* <p className="font-oswald text-[16px] font-medium ">See All</p> */}
          </div>

          {/* table => Image,name,date ,BloodGroup */}

          <div className="flex flex-col gap-3">
            {isLoading ? (
              <LoadingPage />
            ) : (
              lastFiveIndexData?.map((data: any, i: number) => (
                <RecentDonationCard key={i} recentDonation={data?.donnerId} />
              ))
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8  h-full p-2 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-[24px] font-semibold font-playfair">
              Analysis
            </h5>
          </div>
          {/* Analysis */}
          <DashboardChart />
        </div>
        {/* Analysis */}
        <div className="col-span-12 lg:col-span-5 h-[500px] p-2 rounded-xl shadow-md ">
          <div className="flex justify-between items-center">
            <h5 className="text-[24px] font-semibold font-playfair">
              All Users Blood Group
            </h5>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <PieChartExample />
          </div>
        </div>
        {/* Analysis */}
        <div className="col-span-12 lg:col-span-7 h-[500px] p-2 rounded-xl shadow-md ">
          <div className="flex justify-between items-center">
            <h5 className="text-[24px] font-semibold font-playfair">
              Blood Collection Efficiency
            </h5>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <RadarChartExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
