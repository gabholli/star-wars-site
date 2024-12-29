import React from 'react'
import { Link, useLoaderData } from 'react-router'
import type { Route } from './+types/people'

export async function clientLoader() {
    const response = await fetch("https://swapi.py4e.com/api/people/")
    const data = response.json()
    return data
}

export default function People() {
    const data = useLoaderData()
    console.log(data)

    const peopleMap = data.results?.map((person: { name: string }, index: number) => {
        return (
            <Link
                key={person.name}
                className="text-xl"
                to={String(index + 1)}
            >{person.name}
            </Link>
        )
    })
    return (
        <div className='flex flex-col gap-y-8'>
            <h1 className="text-center text-2xl font-bold">Select a character:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12'>
                {peopleMap}
            </div>
        </div >
    )
}