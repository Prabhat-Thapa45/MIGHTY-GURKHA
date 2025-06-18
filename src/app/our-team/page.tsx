import Breadcrumbs from "../utils/bg_with_urls";
import Image from "next/image";

import {
  FaUtensils,
  FaChalkboardTeacher,
  FaRunning,
} from "react-icons/fa";

// TEAM DATA (Unchanged)
const TEAM = [
  {
    name: "Sarita Gurung",
    role: "Cook",
    img: "/team/Rajat.jpg",
    icon: <FaUtensils />,
  },
  {
    name: "Ramesh Rai",
    role: "Trainer",
    img: "/team/Ravi.jpg",
    icon: <FaRunning />,
  },
  {
    name: "Sita Lama",
    role: "Trainer",
    img: "/team/Roshan.jpg",
    icon: <FaRunning />,
  },
  {
    name: "Pawan Thapa",
    role: "Trainer",
    img: "/team/Roshan.jpg",
    icon: <FaRunning />,
  },
  {
    name: "Snajeev Khatri",
    role: "Trainer",
    img: "/team/Ravi.jpg",
    icon: <FaRunning />,
  },
  {
    name: "Anil Gurung",
    role: "Teacher",
    img: "/team/Ravi.jpg",
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Deepak Rai",
    role: "Teacher",
    img: "/team/Ravi.jpg",
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Sunita Tamang",
    role: "Teacher",
    img: "/team/Ravi.jpg",
    icon: <FaChalkboardTeacher />,
  },
];

// ROLES CONSTANT (Unchanged)
const ROLES = ["CEO", "Cook", "Trainer", "Teacher"] as const;

// --- REWRITTEN COMPONENT WITH IMPROVED LAYOUT ---

export default function OurTeamPage() {
  const byRole = ROLES.reduce((acc, role) => {
    acc[role] = TEAM.filter((m) => m.role === role);
    return acc;
  }, {} as Record<typeof ROLES[number], typeof TEAM>);

  const ceo = byRole["CEO"]?.[0];
  const otherRoles = ROLES.filter((r) => r !== "CEO");

  return (
    <div className="bg-gray-50 flex flex-col">
      <Breadcrumbs />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              The passionate and dedicated individuals who make our mission
              possible.
            </p>
          </div>

          {/* --- Other Team Members Section with a NEW space-efficient layout --- */}
          <div className="space-y-16">
            {otherRoles.map((role) => (
              <div
                key={role}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start"
              >
                {/* Role Title Column */}
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold text-gray-800 text-center md:text-left sticky md:top-24">
                    {role}s
                  </h3>
                </div>

                {/* Team Cards Column */}
                <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {byRole[role].map((m) => (
                    <Card member={m} key={m.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Card Component (No changes needed here) ---
function Card({
  member,
}: {
  member: { name: string; role: string; img: string; icon: React.ReactElement };
}) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full">
      <Image
        src={member.img}
        alt={member.name}
        width={400}
        height={400}
        className="object-cover w-full h-80 transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center">
        <div className="text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="text-green-400 text-4xl mb-2">{member.icon}</div>
          <h4 className="text-xl font-bold">{member.name}</h4>
          <p className="text-green-200 text-sm font-medium">{member.role}</p>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-white group-hover:opacity-0 transition-opacity duration-300">
          <h4 className="text-xl font-bold">{member.name}</h4>
        </div>
      </div>
    </div>
  );
}