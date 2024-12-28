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
    <div>
      <nav className="grid grid-cols-1 place-items-center gap-y-6">
        <Link to="films">Films</Link>
        <Link to="people">People</Link>
        <Link to="">Link here</Link>
      </nav>
    </div>
  )
}