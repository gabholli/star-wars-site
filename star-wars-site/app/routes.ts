import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/dashboard.tsx"),
        route("films", "routes/films/films.tsx"),
        route("people", "routes/people/people.tsx"),
        route("films/:filmId", "routes/films/filmDetails.tsx"),
        route("people/:peopleId", "routes/people/peopleDetails.tsx"),
        route("starships", "routes/starships/starships.tsx"),
        route("starships/:starshipId", "routes/starships/starshipDetail.tsx"),
        route("vehicles", "routes/vehicles/vehicles.tsx"),
        route("vehicles/:vehicleId", "routes/vehicles/vehicleDetail.tsx")
    ]),
] satisfies RouteConfig;