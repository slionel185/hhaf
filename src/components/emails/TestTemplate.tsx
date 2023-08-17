import * as React from 'react'

interface EmaiLTemplateProps {
    firstName: string
}

export function TestTemplate({ firstName }: EmaiLTemplateProps) {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
        </div>
    )
}