import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection = () => {
  return (
    <main className="bg-zinc-900 text-white min-h-screen flex items-center  pl-12 pr-12 mb-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 ">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            This is a Special Website
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            accusamus nulla numquam. At corporis reiciendis natus iusto?
            Delectus, adipisci consequatur.
          </p>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300  animate-bounce">
            Start Explore
            <IoIosArrowRoundForward size={20} />
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/statue.png"
            alt="Travel"
            className="rounded-lg shadow-lg w-full h-auto max-h-80 object-cover"
          />
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
