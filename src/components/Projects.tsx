import { tasks } from "@/constants/constants";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <section>
      <CardProject tasks={tasks} />
    </section>
  )
}
