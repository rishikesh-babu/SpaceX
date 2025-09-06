import React from 'react'
import { useParams } from 'react-router-dom'

export default function LaunchDetails() {
    const { id } = useParams()
    return (
        <div>
            This is launch details with id: {id}
        </div>
    )
}
