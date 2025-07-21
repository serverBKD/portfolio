import { tasks } from "@/constants/constants";
import CardProject from "@/components/CardProject.tsx";

export default function Projects() {
	return (
		<section className="card-project">
			<CardProject tasks={tasks} />
		</section>
	);
}
