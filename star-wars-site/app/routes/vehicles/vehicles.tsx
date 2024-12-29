import React from 'react'
import { Link, useLoaderData } from 'react-router'

export async function clientLoader() {
    const response = await fetch("https://swapi.py4e.com/api/vehicles/")
    const data = response.json()
    return data
}


export default function Vehicles() {
    const data = useLoaderData()

    const vehicleMap = data.results?.map((vehicle: {
        url: any, name: string,
    }, index: number) => {
        return (
            <Link
                className="text-xl"
                to={`/vehicles/${vehicle.url.split('/').filter(Boolean).pop()}`}>
                {vehicle.name}
            </Link>
        )

    })

    return (
        <div className='flex flex-col gap-y-8'>
            <h1 className="text-center text-2xl font-bold">Select a vehicle:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12'>
                {vehicleMap}
            </div>
        </div >
    )
}
