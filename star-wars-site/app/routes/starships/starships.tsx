import { Link, useLoaderData } from "react-router"

export async function clientLoader() {
    const response = await fetch("https://swapi.py4e.com/api/starships/")
    const data = response.json()
    return data
}

export default function Starships() {
    const data = useLoaderData()
    console.log(data)
    const shipMap = data.results?.map((ship: {
        url: any, name: string,
    }, index: number) => {
        return (
            <div key={ship.url}>
                <Link
                    className="text-xl"
                    to={`/starships/${ship.url.split('/').filter(Boolean).pop()}`}>
                    {ship.name}
                </Link>
            </div>
        )

    })

    return (
        <div className='flex flex-col gap-y-8'>
            <h1 className="text-center text-2xl font-bold">Select a character:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12'>
                {shipMap}
            </div>
        </div >
    )
}
