import React from "react";
import Image from "next/image";
import FB from "../../../public//f.png";
import IN from "../../../public/In.png";
import TW from "../../../public/TW.png";
function Footer() {
  return (
    <div className="bg-blue-800 ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className=" bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="tracking-widest text-3xl title-font font-bold text-white tex mb-1">
                  Whitepace
                </p>
                <p className="title-font sm:text-2xl text-xl font-medium  mb-3"></p>
                <p className="leading-relaxed mb-3 text-white">
                  Whitepace was created for the new ways we live and work. We
                  make beautifully designed around the world
                </p>
                <a className="text-indigo-500 inline-flex items-center"></a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="tracking-widest text-xl title-font font-medium text-white mb-1">
                  Products
                </p>
                <p className="title-font sm:text-2xl text-xl font-medium text-orange-200 mb-3">
                  Overview
                </p>
                <p className="leading-relaxed mb-3 text-white text-xl">
                  Pricing
                </p>
                <a className=" inline-flex items-center text-white text-xl">
                  Customer stories
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className=" bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="tracking-widest  title-font font-medium text-white text-xl mb-1">
                  Company
                </p>
                <p className="title-font sm:text-xl text-xl font-medium text-white mb-3">
                  About us
                </p>
                <p className="leading-relaxed mb-3 text-white text-xl">
                  Careers
                </p>
                <a className="text-white text-xl inline-flex items-center">
                  Media kitS
                </a>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className=" bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-white mb-1">
                    Try it Today
                  </h2>
                  <p className="title-font sm:text-sm text-xl font-medium text-white mb-3 mt-5">
                    Get started for free. Add your whole team as you need grow
                  </p>
                  <p className="leading-relaxed mb-3">
                    <button className="bg-blue-400 px-8 py-4 rounded-lg text-white text-2xl mt-10">
                      Star today
                    </button>
                  </p>
                  <a className="text-indigo-500 inline-flex items-center"></a>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <p className="tracking-widest text-xl title-font font-medium text-white mb-1">
                      English
                    </p>
                    <p className="title-font sm:text-md text-lg  text-white mb-3">
                      Terms & privacy
                    </p>
                    <p className="leading-relaxed mb-3 text-white text-xl">
                      Security
                    </p>
                    <p className="text-white text-xl inline-flex items-center">
                      Status
                    </p>
                    <p className="title-font sm:text-md text-xl font-medium text-white mb-3">
                      2021 Whitepace LLC.
                    </p>
                    <div className="flex gap-2 ml-28 border-t-white">
                      <Image src={FB} alt="FB" width={30} height={30} />
                      <Image src={TW} alt="TW" width={30} height={30} />
                      <Image src={IN} alt="In" width={30} height={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
