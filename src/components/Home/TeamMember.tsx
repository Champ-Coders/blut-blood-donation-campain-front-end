"use client";
import { TeamMembers } from "@/constants/TeamMembers";
import React from "react";
import TeamMembersCard from "../TeamMembersCard/TeamMembersCard";
import { useVolunteersQuery } from "@/redux/Api/volunteerApi";
import { IVolunteers } from "@/interfaces/common";

const TeamMember = () => {
  const { data } = useVolunteersQuery(undefined);

  return (
    <section>
      <div className=" !pt-0 common">
        <div>
          <div className="text-center mb-10">
            <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">
              TEAM MEMBERS
            </h5>
            <h4 className="capitalize text-2xl lg:text-5xl font-bold text-[#111111] mb-7">
              Meet Volunteers
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data?.data?.slice(0, 3).map((item: IVolunteers) => (
              <TeamMembersCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
