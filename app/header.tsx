import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './globals.css';
import Image from "next/image";

export default function Header() {
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Services', href: '/services', current: false },
        { name: 'Portfolio', href: 'portfolio', current: false },
        { name: 'Case Studies', href: '#', current: false },
        { name: 'Offers', href: '#', current: false },
        { name: 'About Me', href: '/about', current: false },
        { name: 'Blog', href: '#', current: false },
        { name: 'Contact Me', href: '#', current: false },
      ]
return (
<Disclosure as="nav" className="lg:h-40">
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-5 h-35">
      <div className="relative flex h-16 items-center justify-end">
        <div className="absolute inset-y-0 left-0 flex items-right lg:hidden md:pt-30">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-end rounded-md p-2 text-gray-400 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-between 0 h-20 pt-15 lg:pt-5 ">
          <div className="flex shrink-0 items-start">
            <img
              alt="Your Company"
              src="img/mmoneim-logo.png"
              className="h-32 mt-1 w-auto md:pl-10"
            />
          </div>
          <div className="hidden sm:ml-6 lg:block">
            <div className="flex space-x-4 pt-7 justify-end">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={item.current ? 'justify-end font-bold text-regal-blue text-xl px-5':'justify-end font-bold text-[#f4362e] text-xl px-5'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel className="md:block">
      <div className="space-y-3 px-20 pt-20 pb-3">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={'font-bold block rounded-md px-3 py-3 text-center text-[#f4362e] text-l'}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
)
}