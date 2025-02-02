import { Link, useLoaderData, useNavigate, useLocation } from 'react-router'

export async function clientLoader({ request }: { request: Request }) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page") || "1"
    const response = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`)
    const data = await response.json()
    return { data, page: Number(page) }
}

export default function People() {
    const { data, page } = useLoaderData() as { data: any, page: number }
    const navigate = useNavigate()
    const location = useLocation()

    const handlePageChange = (newPage: number) => {
        navigate(`?page=${newPage}`)
    }

    return (
        <div className="flex flex-col gap-y-8">
            <h1 className="text-center text-2xl font-bold">Select a character:</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12">
                {data.results?.map((person: { name: string }, index: number) => (
                    <Link key={person.name} className="text-xl" to={String(index + 1)}>
                        {person.name}
                    </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mt-8">
                {data.previous && (
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                )}
                {data.next && (
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    )
}
