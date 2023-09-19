import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the form submission here
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here
    const searchQuery = e.target.searchQuery.value;
    // Perform a search using the searchQuery
    console.log("Search query:", searchQuery);
  };

  // Function to navigate to item details
  const handleViewDetailsClick = (index) => {
    navigate(`/item-details/${index}`);
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
      <section className="bg-[#ddd5d5] p-8">
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
              className="bg-[#c5bcbc] text-gray-800 p-2 rounded-r-full hover:bg-[#9e9696] focus:outline-none focus:ring focus:border-blue-500"
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
                <button
                  onClick={() => handleViewDetailsClick(index)}
                  className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full px-4 py-2 transition-colors"
                >
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
              <button
                onClick={() => handleViewDetailsClick(3)}
                className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Additional content section */}
      <section className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center flex justify-center">
          Featured Artwork
        </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          varius ex quis metus condimentum, vel ultrices lorem luctus.
          Suspendisse potenti. Nullam eget vehicula justo, nec condimentum erat.
          Curabitur vitae dui vitae elit sollicitudin feugiat. Sed ut felis ac
          justo vehicula venenatis. Nullam suscipit, justo sit amet gravida
          facilisis, dui nisl fringilla augue, eu luctus ex lorem in leo. Aenean
          nec viverra ipsum. Cras congue libero et ante dapibus, id feugiat
          neque hendrerit. Sed sodales consectetur lorem, a pharetra neque
          volutpat id. Nullam venenatis, ligula a finibus tristique, nisi neque
          convallis tellus, eu malesuada sem lectus vel eros.
        </p>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white rounded py-2 px-3 w-full"
              />
              <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 mt-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">FAQ</h3>
            <ul>
              <li>
                <a href="#">How to order?</a>
              </li>
              <li>
                <a href="#">Delivery information</a>
              </li>
              <li>
                <a href="#">Return policy</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex justify-center">
          <a href="#" className="mr-4 text-white hover:text-gray-500">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="mr-4 text-white hover:text-gray-500">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-white hover:text-red-500">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
