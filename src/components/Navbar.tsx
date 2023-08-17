'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import Logo from '@/assets/Logo.png'
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

export default function Navbar() {
    return (
        <div className='shadow-lg lg:shadow-none flex flex-row w-full max-w-7xl justify-between items-center px-4 lg:px-8 py-3 bg-green lg:bg-background'>
            <NavigationMenu className='lg:hidden'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-transparent'><Menu className='h-8 w-8' /></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid w-[200px] gap-3 p-4'>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Home</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>About</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Services</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/contact'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Register</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Rate</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Payment</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/contact'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Careers</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/contact'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Contact</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href='/contact'
                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <div className='text-sm font-medium leading-none'>Quote</div> 
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Image className='lg:hidden' src={Logo} alt='Logo' height={60} width={60}  />
            <Image className='hidden lg:block' src={Logo} alt='Logo' height={100} width={100}  />
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            About
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/contact' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Register
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Rate
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Payment
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/contact' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Careers
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/contact' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                    <Link href='/contact' legacyBehavior passHref>
                        <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>
                            Quote
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}