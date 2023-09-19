import React from "react";

function Home() {
  // Handle the form submission here
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here
    const searchQuery = e.target.searchQuery.value;
    // Perform a search using the searchQuery
    console.log("Search query:", searchQuery);
  };

  return (
    <div>
      <section className="bg-cover bg-center h-1/2">
        <img
          src="room38.jpg"
          alt="Artwork"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="bg-gray-100 p-8">
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              name="searchQuery"
              placeholder="Search for art..."
              className="w-full p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-gray-300 text-gray-800 p-2 rounded-r-full hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-500"
            >
              Search
            </button>
          </form>
        </div>
        {/* Art Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {/* Use the array of image URLs to populate the grid */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative group border border-gray-300 rounded-lg shadow-lg"
            >
              <img
                src={
                  index === 0
                    ? "panfan-site.jpg"
                    : index === 1
                    ? "Stacked.jpg"
                    : "widely.jpg"
                }
                alt={
                  index === 0
                    ? "Panfan Paint"
                    : index === 1
                    ? "Stacked Paint"
                    : "Widely Paint"
                }
                className="w-full h-auto rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-500 hover:bg-grey-600 rounded-full px-4 py-2 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}

          {/* Additional template */}
          <div className="relative group border border-gray-300 rounded-lg shadow-lg">
            <img
              src="red.jpg"
              alt="Template 4"
              className="w-full h-auto rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
