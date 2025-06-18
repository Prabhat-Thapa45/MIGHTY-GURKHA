// TeamCard.tsx
import Image from "next/image";

const ROLE_COLORS: Record<string,string> = {
  Cook:     "bg-red-600",
  Trainer:  "bg-green-600",
  Teacher:  "bg-orange-600",
};

export function TeamCard({
  name,
  role,
  icon: Icon,
  image,
}: {
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}) {
  // fall back to gray if role is unmapped
  const bgColor = ROLE_COLORS[role] || "bg-gray-600";

  return (
    <div className="relative w-[270px] h-[340px] rounded-2xl flex flex-col justify-center text-center group transition-all duration-700 hover:shadow-xl hover:bg-green-600 m-10">
      {/* Icon Bubble */}
      <div
        className={
          `absolute -top-10 left-1/2 -translate-x-1/2 z-10 p-5 w-[80px] h-[80px] rounded-full flex items-center justify-center ` +
          bgColor
        }
      >
        <Icon className="text-[50px] text-white" />
      </div>

      {/* Role Label */}
      <span
        className={`
          absolute left-1/2 -translate-x-1/2 top-[300px]
          text-[25px] font-bold text-gray-600
          transition-all duration-700 ease-in-out
          group-hover:top-[45px] group-hover:text-shadow-2xs
          group-hover:text-gray-50 z-10
        `}
      >
        {role}
      </span>

      {/* Image */}
      <div className="overflow-hidden w-[270px] h-[300px] relative rounded-2xl bg-gray-300">
        <Image
          src={image}
          alt={role}
          width={370}
          height={270}
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-[120px]
            w-[340px] h-[400px]
            max-w-none
          "
        />
      </div>

      {/* Name */}
      <span className="text-[26px] font-bold text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
        {name}
      </span>
    </div>
  );
}

