import { useLoaderData } from "react-router"
import type { Route } from "./+types/peopleDetails"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const peopleId = params.peopleId
    const res = await fetch(
        `https://swapi.py4e.com/api/people/${peopleId}`
    )
    return await res.json()
}

export default function PeopleDetails() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Details for {data.name}:</h1>
        </div>
    )a
}
