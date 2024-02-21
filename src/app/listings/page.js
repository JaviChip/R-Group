"use client";
import ListingsPerPage from "@/components/listings/ListingsPerPage";
const Listings = () => {
  return (
    <div className="flex  justify-center h-screen">
      <div className="pr-5"></div>
      <div className="text-center mt-40">
        Listings page content
        <br />
        <div className="text-center mt-0">
          <ListingsPerPage />
        </div>
      </div>
    </div>
  );
};

export default Listings;
