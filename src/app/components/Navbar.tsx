import React from 'react'
import Image from 'next/image'
import Nv from '../../../public/Nv.png'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      
      <span className="ml-3 text-xl">Whitepace</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      


      <Link href={"products"} className="mr-5 hover:text-gray-900">Products</Link>
      <Link href={"solution"} className="mr-5 hover:text-gray-900">Solution</Link>
      <Link href={"resources"} className="mr-5 hover:text-gray-900">Resources</Link>
      <Link href={"pricing"} className="mr-5 hover:text-gray-900">Pricing</Link>
      <button className='px-3 py-2 bg-yellow-300 rounded-md text-sm mr-3'> Login</button>
      <button className='px-3 py-2 bg-blue-300 rounded-md text-sm'>Try Whatpace free +</button>
      
     

    </nav>
    <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      
      <Image src={Nv}alt='NV'width={20}height={20}/>     
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar
