import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Star Wars Info" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-16">
      <h1 className="text-2xl text-center font-bold">Find out more about Star Wars!</h1>
      <nav className="text-xl grid grid-cols-1 place-items-center gap-y-16">
        <Link to="films">Films</Link>
        <Link to="people">People</Link>
        <Link to="starships">Starships</Link>
      </nav>
    </div>
  )
}