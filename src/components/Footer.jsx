import Image from "next/image";
import RLogo from "../public/home/R-Logo.png";

const Footer = () => {
  return (
    <div className="p-3 flex items-center justify-between bg-yellow-600">
      <div>
        <Image alt="R-logo" className="w-16" src={RLogo} />
      </div>

      <div className="flex flex-col items-end pl-2 pr-1 sm:px-4 text-blue-950 font-bold">
        <div className="mb-1 text-xs sm:text-sm">contact us</div>
        <div className="text-xs sm:text-sm">900 University Ave,</div>
        <div className="text-xs sm:text-sm">Riverside, CA 92521</div>
      </div>
    </div>
  );
};

export default Footer;
