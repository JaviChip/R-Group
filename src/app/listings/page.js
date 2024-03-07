import Listing from "@/components/listings/Listing";
import FavoritesButton from "@/components/listings/FavoritesFilter";
import Filters from "@/components/listings/Filters";
import PageResults from "@/components/listings/Pages";
import SearchBar from "@/components/listings/SearchBar";
import ResultsNum from "@/components/listings/Results";

const Listings = () => {
  return (
    <div className=" justify-center relative flex flex-col my-24">
      <div className="justify-center flex flex-col w-full bg-gray-300 ">
        <div className="mt-5 mr-10 ml-10">
          <SearchBar />
        </div>

        <div className="justify-center mb-10 flex flex-row w-full">
          <div className="ml-2 mr-3 mt-10">
            <FavoritesButton />
          </div>

          <div className="ml-2 mr-3 mt-10">
            <Filters />
          </div>

          <div className="ml-2 mr-3 mt-10">
            {/* {Hard Coded In} */}
            <ResultsNum Number={10} />
          </div>
        </div>
      </div>

      <div className="mt-16 mr-20 ml-5 mb-40 flex row-span-2">
        <div className="ml-2 mr-3">
          <Listing />
        </div>

        <div className="mr-2 ml-3">
          <Listing />
        </div>
      </div>

      <div className="ml-2 mr-3">
        <PageResults />
      </div>
    </div>
  );
};

export default Listings;
