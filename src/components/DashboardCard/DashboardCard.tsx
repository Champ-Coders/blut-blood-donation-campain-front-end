import React from "react";

type AdminPageProps = {
  title: string;
  date: string;
  total: string;
  backgroundColor: string;
  textColor: string;
};

const Blood = [
  {
    title: "B+",
    total: "5",
  },

  {
    title: "A+",
    total: "2",
  },

  {
    title: "O+",
    total: "3",
  },
];

const DashboardCard = ({ item }: { item: AdminPageProps }) => {
  return (
    <div
      className="p-4 
      text-start 
      
      rounded-lg
       shadow-md
        transform hover:scale-105
        transition-transform
        duration-500
        ease-in-out
       "
      style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
    >
      <div className="flex w-full justify-between items-center mb-3">
        <h5 className="text-[24px] font-semibold font-playfair">
          {item.title}
        </h5>
        <p className="font-oswald text-[16px] font-medium ">{item.date}</p>
      </div>
      <div className="flex justify-between">
        {/* total */}
        <div className="font-roboto ">
          <p className="text-[16px] font-semibold -mb-2">Total</p>
          <p className="text-[30px] font-bold">{item.total}</p>
        </div>

        {/* blood lists */}
        <div className="flex items-center justify-between gap-3">
          {/* blood list */}
          {Blood?.map((blood, i) => {
            return (
              <div key={i} className="bg-white rounded-lg font-semibold">
                <p
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: item.textColor, color: "white" }}
                >
                  {blood.title}
                </p>
                <p
                  className="px-2 text-center rounded-b-lg"
                  style={{ color: item.textColor }}
                >
                  {blood.total}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
