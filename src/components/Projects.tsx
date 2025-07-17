import { tasks } from "@/constants/constants";
import CardProject from "./CardProject";

export default function Projects() {
	return (
		<section>
			<article className="card-project">
				<CardProject tasks={tasks} />
			</article>
		</section>
	);
}
