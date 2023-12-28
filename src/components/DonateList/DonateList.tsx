import React from "react";

interface UserInfo {
  address: string;
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
  bloodGroup: string;
  dateOfBirth: string;
  totalDonation: number;
  totalReceived: number;
  available: boolean;
  __v: number;
}

type DonateListProps = {
  data: UserInfo[];
};

const DonateList: React.FC<DonateListProps> = ({ data }) => {
  return (
    <section>
      <div className="common">
        <div>
          {/* table head */}
          <table className="min-w-full bg-primary hover:bg-white ease-out duration-500 transition-all hover:text-[#111] font-semibold rounded shadow-2xl text-white">
            <thead>
              <tr>
                <th className="p-5">Name</th>
                <th className="p-5">Email</th>
                <th className="p-5">Blood Group</th>
                <th className="p-5">Phone Number</th>
                <th className="p-5">Total Donation</th>
                <th className="p-5">Total Received</th>
                <th className="p-5">Availability</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {data?.map((item: UserInfo) => (
                <tr
                  key={item._id}
                  className="bg-[#111] hover:bg-primary ease-out duration-500 transition-all text-center text-white shadow-lg"
                >
                  <td className="p-5">{item.name}</td>
                  <td className="p-5">{item.email}</td>
                  <td className="p-5">{item.bloodGroup}</td>
                  <td className="p-5">{item.phoneNumber}</td>
                  <td className="p-5">{item.totalDonation}</td>
                  <td className="p-5">{item.totalReceived}</td>
                  <td className="p-5">
                    {item.available ? "Available" : "Unavailable"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DonateList;
