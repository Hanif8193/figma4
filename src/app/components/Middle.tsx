import React from "react";

function Middle() {
  return (
    <div className="bg-blue-600">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4  text-white font-bold">
              Work with Your Favourite Apps Using Whitepace
            </h1>
            <p className="mb-8 leading-relaxed text-white text-md">
              Whitepace team up with your favourite software. Integrated with
              over 1000+ apps with Zapier to have all the tool you need for your
              project success.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Middle;
