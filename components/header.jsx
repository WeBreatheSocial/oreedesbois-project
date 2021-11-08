/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Phone from '../public/svg/phone.svg'
import Logo from '../public/svg/logo.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="sticky top-0 bg-white header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0  md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to='banner'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-300}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500} alt='Orée des Bois - Bouskoura'>
                <Image src={Logo} alt='' width={220}  className='cursor-pointer'/>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
          <a href="tel:+212661510510" >
              <a href="tel:+212661510510">
<svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" viewBox="-461 463 36 36"><path d="M-461 463h36v36h-36v-36z" fill="none"/><path d="M-432.5 481h3c0-7.5-6-13.5-13.5-13.5v3c5.8 0 10.5 4.7 10.5 10.5zm-6 0h3c0-4.1-3.4-7.5-7.5-7.5v3c2.5 0 4.5 2 4.5 4.5zm-2.7 8.1c-4.2-2.2-7.7-5.6-9.9-9.9l3.8-3.8-.9-7.9h-8.3c-.9 15.3 11.7 27.8 27 27v-8.3l-7.9-.9-3.8 3.8z" fill="#c93"/>
                </svg>
               </a>
               <span className='font-bold lg:inline-block hidden'>+ 212 6 61 510 510</span>
            </a>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link activeClass="active"
      to='projet'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Le projet
</Link>
<Link activeClass="active"
      to='villa'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={0}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Villa témoin
</Link>
<Link activeClass="active"
      to='access'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  L'accès
</Link>
<Link activeClass="active"
      to='contact'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Contact
</Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="tel:+212661510510" >
              <a href="tel:+212661510510">
<svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" viewBox="-461 463 36 36"><path d="M-461 463h36v36h-36v-36z" fill="none"/><path d="M-432.5 481h3c0-7.5-6-13.5-13.5-13.5v3c5.8 0 10.5 4.7 10.5 10.5zm-6 0h3c0-4.1-3.4-7.5-7.5-7.5v3c2.5 0 4.5 2 4.5 4.5zm-2.7 8.1c-4.2-2.2-7.7-5.6-9.9-9.9l3.8-3.8-.9-7.9h-8.3c-.9 15.3 11.7 27.8 27 27v-8.3l-7.9-.9-3.8 3.8z" fill="#c93"/>
                </svg>
               </a>
               <span className='font-bold lg:inline-block hidden'>+ 212 6 61 510 510</span>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="">
                <div className="-mr-2">
                <div className='flex flex-row justify-between items-center'>
                <div className=''>  
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:btn-color hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
            </div>
                <div className='self-start relative'>
                <Link to='banner'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-300}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500} alt='Orée des Bois - Bouskoura'>
                <Image src={Logo} alt='' width={220}  className='cursor-pointer logo-mobile'/>
            </Link>
                 
            </div>
                <div className=''>   <a href="tel:+212661510510" >
              <a href="tel:+212661510510">
<svg xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" viewBox="-461 463 36 36"><path d="M-461 463h36v36h-36v-36z" fill="none"/><path d="M-432.5 481h3c0-7.5-6-13.5-13.5-13.5v3c5.8 0 10.5 4.7 10.5 10.5zm-6 0h3c0-4.1-3.4-7.5-7.5-7.5v3c2.5 0 4.5 2 4.5 4.5zm-2.7 8.1c-4.2-2.2-7.7-5.6-9.9-9.9l3.8-3.8-.9-7.9h-8.3c-.9 15.3 11.7 27.8 27 27v-8.3l-7.9-.9-3.8 3.8z" fill="#c93"/>
                </svg>
               </a>
               <span className='font-bold lg:inline-block hidden'>+ 212 6 61 510 510</span>
            </a>
                   </div>
            </div>

                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                <Link activeClass="active"
      to='projet'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Le projet
</Link>
<Link activeClass="active"
      to='villa'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Villa témoin
</Link>
<Link activeClass="active"
      to='access'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  L'accès
</Link>
<Link activeClass="active"
      to='contact'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink'
>
  Contact
</Link>
                </nav>
              </div>
            </div>
            
               
          
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}