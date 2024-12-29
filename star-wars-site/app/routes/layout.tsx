import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Layout() {
    return (
        <div className='flex flex-col min-h-svh'>
            <nav className='flex justify-center py-4 border-b-2 border-black'>
                <div className="text-xl">
                    <Link to="/">Dashboard</Link>
                </div>
            </nav>
            <main className='flex-1 p-4 flex justify-center items-center'>
                <Outlet />
            </main>
        </div>
    )
}