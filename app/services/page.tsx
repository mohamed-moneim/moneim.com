import Image from "next/image";
import '../globals.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from "../header";
import Topbar from "../top-bar";
import Footer from "../Footer";
export default function Services() {
  return (
    <div className=""> 
    <Topbar />
    <Header />
                    <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 py-15 text-center">
            <h1 className="font-bold  my-7 text-regal-blue text-4xl">Services</h1>
            <p className="text-gray-800 font-bold text-xl">I build High Quality Web & Mobile Applications</p>
            <p className="text-gray-800 font-bold text-xl">With Node.js and Flutter</p>
            


            <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-40 pt-5">
                <div className="portfolio">
                            <img src="./img/application.png" className="logo p-10 md:p-20 lg:p-20" />
                            <h2 className="text-gray-800 font-bold pt-10 md:pt-5">Web Development</h2>

                            </div>
                            <div className="portfolio">
                            <img src="img/flutter.png" className="logo p-10 md:p-20 lg:p-20" />
                            <h2 className="text-gray-800 font-bold pt-10 md:pt-5">Flutter Development</h2>
                            </div>
                            <div className="portfolio">
                          
                            <img src="./img/apple.png" className="logo p-10 md:p-20 lg:p-20"  />
                            <h2 className="text-gray-800 font-bold pt-10 md:pt-5">IOS Apps</h2>

                            </div>

                            <div className="portfolio">
                            <img src="./img/apps.png" className="logo p-10 md:p-20 lg:p-20" />
                            <h2 className="font-bold pt-10 md:pt-5 text-gray-800">Android Apps</h2>

                    </div>
        
                            </div>
      </div>
               <Footer />

                            </div>
                          )
    }