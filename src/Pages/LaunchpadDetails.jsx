import React from 'react'
import { useParams } from 'react-router-dom'

export default function LaunchpadDetails() {
    const { id } = useParams()
    
    return (
        <div>
            this is launch pad details with id: {id}
        </div>
    )
}
