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
            <h1 className="font-bold  my-7 text-regal-blue text-4xl"> About Me</h1>
        <p className="text-gray-900 text-lg mb-6">
        I'm Mohamed , a passionate web and mobile developer with 8 years of freelance experience. 
          I specialize in building modern applications using JavaScript, React.js, Node.js, and Flutter. 
          My goal is to create seamless digital experiences that make an impact.
        </p>
        <div className="flex justify-center mt-16">
          <a href="#" className="bg-[#0b4399] p-5 font-semibold text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Contact Me
          </a>
        </div>
      </div>
               <Footer />

                            </div>
                          )
    }