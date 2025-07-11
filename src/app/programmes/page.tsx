import Link from "next/link";
import Breadcrumbs from "../utils/bg_with_urls";
import Image from "next/image";

const Programmes = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <Breadcrumbs />
      <section className="max-w-[1100px] min-h-screen mx-auto rounded-lg p-8 mt-10 bg-white">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Choose a Programme
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* British Gurkha Army Card */}
          <Link href="/programmes/british-gurkha-army" passHref>
            <div className="bg-white hover:bg-slate-50 shadow-lg rounded-xl p-6  transform transition duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image src="/britishlogo.jpg" width={50} height={50} alt="singapore badge"/>
                <h2 className="text-xl font-semibold text-gray-700">
                  British Gurkha Army
                </h2>
              </div>
              <p className="mt-4 text-gray-500">
                Join one of the world’s most respected military forces, steeped
                in tradition and valor.
              </p>
            </div>
          </Link>

          {/* Singapore Police Force Card */}
          <Link href="/programmes/singapore-police-force" passHref>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:bg-slate-50 transform transition duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image src="/singapore.jpg" width={40} height={40} alt="singapore badge"/>

                <h2 className="text-xl font-semibold text-gray-700">
                  Singapore Police Force
                </h2>
              </div>
              <p className="mt-4 text-gray-500">
                Serve and protect in one of Asia’s safest and most dynamic
                cities.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
