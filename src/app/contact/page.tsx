'use client'

import { toast } from 'react-toastify'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectSeparator, SelectValue, SelectTrigger, SelectLabel, SelectGroup } from '@/components/ui/select'

export default function ContactPage() {

    async function handleSubmit(e: any) {
        e.preventDefault()

        const res = await fetch('/api/contact', {
            method: 'POST'
        }).then(res => res.json())

        console.log(res)
    }

    return (
        <div className='flex flex-col justify-center items-center w-full max-w-7xl py-36 px-4'>
            <Card className='w-full lg:w-1/2 h-full'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>Reach out to use and we will have someone contact you within 48 hours.</CardDescription>
                    </CardHeader>
                    <CardContent className='grid w-full items-center gap-8'>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Name</Label>
                            <Input type='text' placeholder='Name' />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Email</Label>
                            <Input type='text' placeholder='Email' />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Phone Number</Label>
                            <Input type='text' placeholder='Phone Number' />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>What can we do for you?</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder='Category' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='QUOTE'>Quote</SelectItem>
                                    <SelectItem value='CAREERS'>Careers</SelectItem>
                                    <SelectItem value='REGISTER'>Register</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Additional Information</Label>
                            <Textarea />
                        </div>
                    </CardContent>
                    <CardFooter className='w-full justify-end'>
                        <Button type='submit' className='bg-green'>Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}