"use client";

import React, { useEffect, useState } from "react";
import Breadcrumbs from "../utils/bg_with_urls";
import { TeamCard } from "./TeamCard";

type TeamMember = {
  id: number;
  name: string;
  role: "Cook" | "Trainer" | "Teacher";
  image: string;
  color: string;
};

import { ImSpoonKnife } from "react-icons/im";
import { MdDirectionsRun } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cook: ImSpoonKnife,
  Trainer: MdDirectionsRun,
  Teacher: FaBookReader,
};

export default function OurTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/team_members")
      .then((res) => res.json())
      .then((data: TeamMember[]) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  console.log("team",team);

  return (
    <div className="flex flex-col bg-slate-100 mb-10 text-center">
      <Breadcrumbs />

      <h2 className="text-gray-700 text-[30px] font-bold mt-10">
        Meet Our Team
      </h2>
      <span className="text-gray-700 text-[16px] mb-10">
        The dedicated and passionate people who make everything possible
      </span>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {loading
          ? // show 6 skeleton cards
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-60 w-60 bg-gray-200 animate-pulse rounded-lg"
              />
            ))
          : team.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                icon={iconMap[member.role]}
              />
            ))}
      </div>
    </div>
  );
}
