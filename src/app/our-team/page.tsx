import { teamMembers } from "./teamMembers";
import { TeamCard }     from "./TeamCard";
import Breadcrumbs from "../utils/bg_with_urls";

export default function OurTeam() {
  return (
    <div className="flex flex-col bg-slate-100 mb-10 text-center">
      <Breadcrumbs />
      <h2 className="text-gray-700 text-[30px] font-bold mt-10">Meet Our Team</h2>
      <span className="text-gray-700 text-[16px] mb-10">The team of dedicated and passionate people who make everything possible</span>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
