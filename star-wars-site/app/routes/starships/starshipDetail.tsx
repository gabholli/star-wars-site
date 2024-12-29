import { useLoaderData } from "react-router"
import type { Route } from "./+types/starshipDetail"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const starshipId = params.starshipId
    const res = await fetch(
        `https://swapi.py4e.com/api/starships/${starshipId}`
    )
    return await res.json()
}

export default function StarshipDetails() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1 className="text-center">Details for the {data.name}:</h1>
        </div>
    )
}
