import './globals.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from "./header";
import Topbar from "./top-bar";
import Footer from "./Footer";
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import App from 'next/app';
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Case Studies', href: '#', current: false },
  { name: 'Offers', href: '#', current: false },
  { name: 'About Me', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact Me', href: '#', current: false },
]
export const metadata = {
  title: "Web Developer  Software Company in Alexandria, Egypt ",
  description:
    "Showcase of Photosphere, 360, and Panorama images from around the world. Upload and share your own!",
  keywords: ["Photosphere", "360 Photo", "Panorama", "World Map"],
  openGraph: {
    images: 'https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg',
  },
};
 function Home() {
  return (
    <div className=""> 
    <Topbar />
    <Header />
        <div className="mx-auto px-2 py-7 sm:px-6 lg:px-8 flex justify-around w-1/1">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-center w-1/1">
                    
        <div className="min-h-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight py-10 text-center lg:text-left">
                            Hi,I am Mohamed!<br/> An experienced FullStack Developer.
                        </h1>
                        <p className="mt-4 text-gray-800 text-lg text-center lg:text-left"> 
                            I provide the best solutions to create fast, scalable, and user-friendly Websites and Applications.
                        </p>
                        <div className="flex justify-center lg:justify-start mt-2 py-8">
                        <a href="#" className="bg-[#0b4399] p-5 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center  lg:justify-end md:justify-center">
                    <img src="./img/mohamed-abdelmoneim.jpg" alt="Hero Image" className="w-2/3" />
                    </div>
                    </div>
                    </div>
                    <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 py-15 text-center">
            <h1 className="font-bold  my-7 text-regal-blue text-4xl">Services</h1>
            <p className="text-gray-800 font-bold text-xl">I build High Quality Web & Mobile Applications</p>
            


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
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 py-15 text-center">
            <h1 className="font-bold  my-7 text-regal-blue text-4xl"> About Me</h1>
        <p className="text-gray-900 text-lg mb-6">
          Hi, I'm Mohamed , a passionate web and mobile developer with 8 years of freelance experience. 
          I specialize in building modern applications using JavaScript, React.js, Node.js, and Flutter. 
          My goal is to create seamless digital experiences that make an impact.
        </p>
        <div className="flex justify-center mt-16">
          <a href="#" className="bg-[#0b4399] p-5 font-semibold text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Contact Me
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 py-3  text-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-20 items-center">
                <div className="portfolio">
                            <div className="overlayblue">
                                <h2 className="text-white pt-50 text-3xl">New Project</h2>
                                <a className="text-white py-70 text-xl" href="#">Visit Project</a>
                            </div>
                            <img src="./img/quran.png" className="logo" />
                            </div>
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            <img src="./img/ludhiana.jpg" className="logo" />
                            </div>
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                            <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            <img src="./img/iclinic.jpg" className="logo" />
                            </div>
      
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                            <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            <img src="./img/securfone.png" className="logo" />
                    </div>
                            </div>
                            </div>
                            <Footer />

                            </div>
                          )
    }
    export default  Home