import { Heart, Truck, PhoneCall } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function HomePage() {
    return (
        <div className='flex flex-col w-full'>
            <div style={{ background: 'url(/Hero_Van.jpeg) no-repeat center' }} className='w-full h-[600px] lg:h-[900px] flex justify-center items-center relative'>
                <div className='z-[1] bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full' />
                <div className='z-[2] gap-6 flex flex-col justify-center items-center max-w-3xl text-center'>
                    <h1 className='text-2xl lg:text-6xl font-semibold text-white px-8'>Safe & Reliable Door to Door Transportation</h1>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 px-12 lg:px-0 max-w-sm lg:max-w-xl w-full'>
                        <Button size={'lg'} className='w-full bg-green text-lg lg:text-2xl rounded-lg uppercase font-semibold'>Call us Today</Button>
                        <Button size={'lg'} className='w-full bg-zinc-700 text-lg lg:text-2xl rounded-lg uppercase font-semibold'>Contact US</Button>
                    </div>
                </div>    
            </div>
            <section id='homeInfo' className='flex flex-col items-center w-full'>
                <div className='h-full w-full flex flex-col items-center max-w-7xl bg-white p-8 gap-8'>
                    <div className='grid lg:grid-cols-2 w-full lg:gap-6'>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-lg text-green font-semibold'>Why</h1>
                            <h1 className='text-3xl font-semibold'>HHAF Kidz Transporation?</h1>
                        </div>
                        <div className='flex flex-col justify-center gap-8 text-lg'>
                            <p>We are here to help you balance your everyday life!</p>
                            <p>With over 9 years in the business, HHAF Kids Transportation provides a unique and private student shuttle service. Offering many types of transporation services to transport your children to/from school, daycar, after-school activities, athletic events, or anywhere your child needs to be.</p>
                            <p>We concentrate on providing dependable personalized student door-to-door transportation throughout the Delaware area.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-lg gap-8'>
                        <p>Our service helps families maintain balance by providing safe, reliable transportation services at a fair price. While, protecting kids from the dangers of walking to school alone or on busy streets. We strive to meet the needs of parents and become a valuable resource in the communities. HHAF Kids Transportation offers a variety of convenient tranportation packages as well as single trip services if you only need our services occasionally. No matter what your child{'\''}s tranportaiton needs are, we can help you!</p>
                        <p>Call us today to transport your student! (302) 897-2375</p>
                    </div>
                    <Separator />
                    <div id='cards' className='flex flex-col lg:flex-row gap-12 w-full'>
                        <Card className='text-center shadow-xl w-full flex flex-col justify-between'>
                            <CardHeader className='flex flex-col'>
                                <div className='flex flex-col justify-center items-center gap-2'>                               
                                    <Heart color='#539951' className='h-10 w-10' />
                                    <CardTitle>Personalized</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p>Pick up and drop off services are available for your children to and from specific rooms, teachers, locations, or individuals!</p>
                            </CardContent>
                            <CardFooter>
                                <div className='w-full flex justify-center items-center'>
                                    <Button className='uppercase'>Read More</Button>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='text-center shadow-xl w-full flex flex-col justify-between'>
                            <CardHeader className='flex flex-col'>
                                <div className='flex flex-col justify-center items-center gap-2'>                               
                                    <Truck color='#539951' className='h-10 w-10' />
                                    <CardTitle>Experienced Drivers</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p>Our drivers are all experienced with fully vetted driving and police records, as well as training in defensive driving and emergency first aid services.</p>
                            </CardContent>
                            <CardFooter>
                                <div className='w-full flex justify-center items-center'>
                                    <Button className='uppercase'>Read More</Button>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='text-center shadow-xl w-full h-full flex flex-col justify-between'>
                            <CardHeader className='flex flex-col'>
                                <div className='flex flex-col justify-center items-center gap-2'>                               
                                    <PhoneCall color='#539951' className='h-10 w-10' />
                                    <CardTitle>On Call Services</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p>Shuttle service for children, adults, seniors, and families for special events (birthdays, weddings, Bar Mitzvahs, office parties, airport runs, doctors appointments, etc.)</p>
                            </CardContent>
                            <CardFooter>
                                <div className='w-full flex justify-center items-center'>
                                    <Button className='uppercase'>Read More</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <Separator />
                </div>
            </section>
        </div>
    )
}