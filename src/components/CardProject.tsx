import LinkBar from '@/components/LinkBar'
const ImagePlaceholder = '/assets/techs/icons/security-badge-svgrepo-com.svg'

export default function CardProject( { tasks } ) {
	return (
		<section className='x-container'>
			{ tasks?.map( ( task ) => (
				<article className='box-card' key={ task?.id + Math.random() }>
					<section >
						{/* Imagen */ }
						<div className='w-full'>
							{ !task?.img ? (
								<img
									src={ ImagePlaceholder }
									alt={ task?.concept }
									width={ 1080 }
									height={ 1080 }
									className='card-image'
								/>
							) : (
								<img
									src={ task?.img }
									alt={ task?.concept }
									width={ 1080 }
									height={ 1080 }
									className='card-image card-image-effect'
								/>
							) }
						</div>
						{/* <!-- Card like YT --> */ }
						<div className='card-info'>
							<p
								id='task-concept-card'
								style={ {
									textDecoration: task?.completed
										? 'line-through'
										: 'none',
								} }
							>
								{ task.concept }
							</p>
							<p
								id='task-amount-card'
								className={ `${ task.amount < 0 ? 'text-x-error' : ( task.amount > 0 ? 'text-x-color' : 'text-light-2-text' ) } ` }
							>
								USD({ task.amount === 0 ? '0' : task.amount })
							</p>
							<p id='task-date-card'>{ task?.initAt }</p>
						</div>
						{/* <!-- Card like YT --> */ }
						<LinkBar />
					</section>
				</article>
			) ) }
		</section>
	)
}
