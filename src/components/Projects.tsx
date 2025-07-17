import { tasks } from "@/constants/constants";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <section className="w-[75%] mx-auto">
      <CardProject tasks={tasks} />
    </section>
  )
}
