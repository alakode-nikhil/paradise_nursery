function Home() {
  return (
    <>
      <div className="bg flex justify-center items-center min-h-screen p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 max-w-6xl w-full">
          {/* First Column */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">Welcome to Paradise Nursery</h1>
            <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded hover:bg-green-100 transition">
              Get Started
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300 h-40 mx-6"></div>

          {/* Second Column */}
          <div className="md:w-1/2 text-gray-200 mt-6 md:mt-0 px-4 md:px-0 text-center md:text-left">
            <p>
              Caring for nature is one of the basic things as a human being we can do.
              In the size of miniature plants, we provide the ultimate opportunity
              for you to thank Mother Earth. With us, you are not just purchasing products,
              but spread kindness and affection to your own people. So what are you waiting for?
              Let us get started!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
