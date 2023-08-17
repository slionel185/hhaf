import * as React from 'react'

interface EmaiLTemplateProps {
    name: string,
    email: string,
    phone: string,
    inquiry: string,
    message: string
}

export function InquiryTemplate({ name, email, inquiry, phone, message }: EmaiLTemplateProps) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Inquiry: {inquiry}</p>
            <p>Message: {message}</p>
        </div>
    )
}