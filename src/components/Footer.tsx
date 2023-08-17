import Image from 'next/image'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

import Logo from '@/assets/Logo.png'

export default function Footer() {
    return (
        <footer className='w-full flex-flex-col'>
            <div className='w-full flex flex-col bg-black justify-center items-center'>
                <div className='grid lg:grid-cols-2 w-full max-w-7xl px-8 py-12 gap-8'>
                    <div className='flex flex-col justify-center max-w-sm gap-8'>
                        <Image src={Logo} alt='Logo' height={150} width={150} />
                        <p className='text-lg text-background'>We at Happy Hands & Feet Transportation realize that parents are struggling to cope between full time careers and making sure that their children are safe and can take part in sport and extra-curricular activites.</p>
                    </div>
                    <div id='contactInfo' className='flex flex-col justify-center items-start gap-4 text-lg font-semibold text-background'>
                        <h1 className='text-2xl font-semibold text-background'>Contact Info</h1>
                        <div className='flex gap-4'>
                            <Phone color='#359951' className='h-8 w-8' />
                            <h1>(302) 897-3275</h1>
                        </div>
                        <div className='flex gap-4'>
                            <Mail color='#359951' className='h-8 w-8' />
                            <h1>info@hhaftransportation.com</h1>
                        </div>
                        <div className='flex gap-4'>
                            <MapPin color='#359951' className='h-8 w-8' />
                            <h1>263 Chapman Rd Suite 221, Newark, DE 19702</h1>
                        </div>
                        <div className='flex gap-4'>
                            <Facebook color='#359951' className='h-8 w-8' />
                            <a target='_blank' href='https://www.facebook.com/happyhandsandfeetkidz'>happyhandsandfeetkidz</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-green py-6'>
                <h1 className='text-xl text-background'>Happy Hands & Feet Transportation© Copyright 2023. All Rights Reserved.</h1>
            </div>
        </footer>
    )
}