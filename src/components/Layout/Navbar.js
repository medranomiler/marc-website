import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat ({
  weight: ['300' , '400'],
  subsets: [ 'latin']
})

const navigation = [
  { name: 'about', href: '/about', current: false },
  { name: 'bitcoin currency pairs', href: '/btcpairs', current: false },
  { name: 'doing now', href: '/doingnow', current: false },
  { name: 'thoughts', href: '/thoughts', current: false },
  { name: 'collaborate', href: '/collaborate', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Navbar() {

 

  return (
    <Disclosure as="nav" className={`${montserrat.className} dark:bg-gray-800 bg:white border-b  border-gray-200 dark:border-gray-700`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-black" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-black" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch ">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {/* <Image
                    className="block h-8 w-auto lg:hidden dark:invert-[.3]"
                    src=''
                    alt="Your Company"
                  /> */}
                  <p className="block lg:hidden font-bold text-md">MARC MCKIRAHAN</p>
                  </Link>
                  <Link href="/">
                    {/* <Image
                    className="hidden h-8 w-auto lg:block dark:invert-[.3]"
                    src=''
                    alt="Your Company"
                  /> */}
                  <p className="hidden lg:block font-bold text-md">MARC MCKIRAHAN</p>
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4 justify-center flex-wrap">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-gray-900 dark:hover:text-white',
                          'rounded-md px-3 py-1 lg:px-3 lg:py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Link href="https://www.linkedin.com/in/marcmckirahan/">
                  <FaLinkedin className="sm:h-6 sm:w-6 h-5 w-5 mx-2" />
                </Link>
                <Link href="mailto:marcmckirahan@gmail.com">
                  <FiMail className="sm:h-6 sm:w-6 h-5 w-5 mx-2" />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 dark:text-gray-400 hover:bg-slate-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
