import React from "react";

function Middle2() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
            <p className="mb-8 leading-relaxed">
              If you have not tried EventsSprout yet, you need to give it a shot
              for your next event. It is so easy and inuitive to get a new event
              setup and if you need ant help their customer service is seriouly
              amazing.
            </p>
            <div className="flex justify-center">
              <p className="text-2xl font-bold">Jessie Owner </p>
            </div>
            <p className="ml-12 text-lg font-bold">Founder XYZ Company</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Middle2;
