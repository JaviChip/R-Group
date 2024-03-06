import Listing from "@/components/listings/Listing";

const Listings = () => {
  return (
    <div className="mt-40 mr-20 ml-5 mb-40 flex row-span-2">
      <div className="ml-2 mr-3">
        <Listing />
      </div>

      <div className="mr-2 ml-3">
        <Listing />
      </div>
    </div>
  );
};

export default Listings;
