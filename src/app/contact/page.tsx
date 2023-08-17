'use client'

import { useState } from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectSeparator, SelectValue, SelectTrigger, SelectLabel, SelectGroup } from '@/components/ui/select'
import { toast } from 'react-toastify'

export default function ContactPage() {

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [inquiry, setInquiry] = useState<string>()
    const [message, setMessage] = useState<string>()

    async function handleSubmit(e: any) {
        e.preventDefault()

        if(!name || !email || !phone || !inquiry || !message) return toast.error('Please validate all fields have been completed.')

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email, phone, inquiry, message })
        }).then(res => res.json())

        if(res.id) {
            toast.success('Inquiry Sent')
            setName('')
            setPhone('')
            setEmail('')
            setInquiry('')
            setMessage('')
        }
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
                            <Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Email</Label>
                            <Input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>Phone Number</Label>
                            <Input type='text' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='flex flex-col space-y-1.5'>
                            <Label>What can we do for you?</Label>
                            <Select onValueChange={setInquiry} >
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
                            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
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