import '@/app/globals.css'
import 'react-toastify/ReactToastify.css'

import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Happy Hands & Feet Transportation',
    description: 'Helping your students go.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#b91d47" />
                <meta name="theme-color" content="#359951" />
            </head>
            <body className={`${inter.className} flex flex-col w-full min-h-screen items-center`}>
                <Navbar />
                {children}
                <Footer />
                <ToastContainer position='bottom-right' />
            </body>
        </html>
    )
}