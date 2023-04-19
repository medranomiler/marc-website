import { useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Link from "next/link"
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  weight: ['300', '700'],
  subsets: ['latin']
})


const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Bitcoin Currency Pairs', href: '/btcpairs', current: false },
  { name: 'Doing Now', href: '/doingnow', current: false },
  { name: 'Thoughts', href: '/thoughts', current: false },
  { name: 'Collaborate', href: '/collaborate', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()


  for (let i = 0; i < navigation.length; i++) {
    if (router.pathname === navigation[i].href) {
      navigation[i].current = true;
    }
    else {
      navigation[i].current = false
    }
  }

  const loggedIn = false
  

  return (
    <>
      <nav className={`${montserrat.className} flex items-center justify-between p-6 lg:px-8 border-b  border-gray-200`} aria-label="Global">
        <div className="flex lg:flex-1">
                  <Link href="/">
                  <p className="font-bold text-md">MARC MCKIRAHAN</p>
                  </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:flex-wrap">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={classNames(
              item.current ? 'font-bold text-black' : 'text-black hover:font-bold',
              'rounded-md px-3 py-1 lg:px-3 lg:py-2 text-sm'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://www.linkedin.com/in/marcmckirahan/">
            <FaLinkedin className="sm:h-6 sm:w-6 h-5 w-5 mx-2" />
          </Link>
          <Link href="https://t.me/marcmckirahan">
            <FaTelegramPlane className="sm:h-6 sm:w-6 h-5 w-5 mx-2" />
          </Link>
          <Link href="mailto:marcmckirahan@gmail.com">
            <FiMail className="sm:h-6 sm:w-6 h-5 w-5 mx-2" />
          </Link>
        </div>
      </nav>

      
      <Dialog as="div" className={`${montserrat.className} lg:hidden`} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
                  <Link 
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  >
                  <p className="font-bold text-md">MARC MCKIRAHAN</p>
                  </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {!loggedIn? <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link> :
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log out
                </Link>}
                <div className="flex flex-1 justify-center mt-4">
          <Link href="https://www.linkedin.com/in/marcmckirahan/">
            <FaLinkedin className="h-8 w-auto mx-4" />
          </Link>
          <Link href="https://t.me/marcmckirahan">
            <FaTelegramPlane className="h-8 w-auto mx-4" />
          </Link>
          <Link href="mailto:marcmckirahan@gmail.com">
            <FiMail className="h-8 w-auto mx-4" />
          </Link>
        </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}