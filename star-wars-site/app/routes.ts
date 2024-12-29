import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/dashboard.tsx"),
        route("films", "routes/films/films.tsx"),
        route("people", "routes/people/people.tsx"),
        route("films/:filmId", "routes/films/filmDetails.tsx")
    ]),
] satisfies RouteConfig;