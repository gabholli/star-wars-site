import { Link, useLoaderData } from "react-router"

export async function clientLoader() {
    const response = await fetch("https://swapi.py4e.com/api/films/")
    const data = response.json()
    return data
}

export default function Films() {
    const data = useLoaderData()

    const filmMap = data.results?.map((film: { created: string, title: string, episode_id: number }, index: number) => {
        return (
            <Link
                key={film.episode_id}
                className="text-xl"
                to={String(index + 1)}
            >{film.title}
            </Link>
        )
    })
    return (
        <div className="grid grid-col-1 justify-items-center gap-y-8">
            <h1 className="text-2xl font-bold">Select a movie:</h1>
            {filmMap}
        </div>
    )
}