import Image from "next/image";
import '../globals.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from "../header";
import Topbar from "../top-bar";
import Footer from "../Footer";
export default function Portfolio() {
  return (
    <div className=""> 
    <Topbar />
    <Header />
    <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 py-3  text-center">
    <h1 className="font-bold  my-7 text-regal-blue text-4xl pb-20">Some of My Previous Work</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-20 items-center">
                <div className="portfolio">
                            <div className="overlayblue">
                                <h2 className="text-white pt-50 text-4xl">New Project</h2>
                                <a className="text-white py-70 text-xl" href="#">Visit Project</a>
                            </div>
                            <img src="../img/quran.png" className="logo" />
                            </div>
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            </div>
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                            <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            <img src="../img/iclinic.jpg" className="logo" />
                            </div>
      
                            <div className="portfolio p-5 md:p-10 lg:p-10">
                            <div className="overlayblue">
                                <h3 className="white align-bottom ">New Project</h3>
                                <a className="align-bottom" href="#">Visit Project</a>
                            </div>
                            <img src="../img/securfone.png" className="logo" />
                    </div>
                            </div>
                            </div>
               <Footer />

                            </div>
                          )
    }