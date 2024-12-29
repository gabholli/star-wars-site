import { useLoaderData } from "react-router"
import type { Route } from "./+types/filmDetails"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const filmId = params.filmId
    const res = await fetch(
        `https://swapi.py4e.com/api/films/${filmId}`
    )
    return await res.json()
}

export default function FilmDetails() {
    const data = useLoaderData()
    return (
        <div>{data.title}</div>
    )
}
