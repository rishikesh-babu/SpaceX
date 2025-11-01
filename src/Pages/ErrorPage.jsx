import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center min-h-screen justify-center gap-4'>
            <div className='font-semibold text-5xl text-red-400'> 404 Error </div>
            <div className='text-red-400 text-xl'> Page not Exist </div>
            <button onClick={() => navigate(-1)} className="text-2xl btn btn-lg dark:btn-info">Go Back </button>
        </div>
    )
}

export default ErrorPage