import LinkBar from "@/components/LinkBar";
const ImagePlaceholder = "/assets/techs/icons/security-badge-svgrepo-com.svg";
import type { Tasks } from "@/types/types";

export default function CardProject({ tasks }: { tasks: Tasks[] }) {
	return (
		<section className="card-section ">
			{tasks?.map((task) => (
				<article className="card-box" key={task?.id + Math.random()}>
					<section>
						{/* Imagen */}
						<div className="w-full">
							{!task?.img ? (
								<img
									src={ImagePlaceholder}
									alt={task?.concept}
									width={1080}
									height={1080}
									className="card-image"
								/>
							) : (
								<img
									src={task?.img}
									alt={task?.concept}
									width={1080}
									height={1080}
									className="card-image card-image-effect"
								/>
							)}
						</div>
						{/* <!-- Card like YT --> */}
						<div className="card-info">
							<p id="task-concept-card">{task.concept}</p>
							<p id="task-amount-card">Description of project</p>
							<p id="task-date-card">{task?.initAt}</p>
						</div>
						{/* <!-- Card like YT --> */}
						<LinkBar />
					</section>
				</article>
			))}
		</section>
	);
}
