'use client'
// import { addList } from '@/app/server/actions.js'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
import { SVGInstagram, SVGFacebook, SVGLinkedin, SVGTwitter } from '@/services/svg-repo.js'
import { LINK_INSTAGRAM, LINK_FACEBOOK, LINK_TWITTER, LINK_WS } from '@/constants/constants'

export default function Contacto() {
	// const { push } = useRouter()
	const [ sended ] = useState( false )

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm( {} )

	const onSubmit = handleSubmit( async ( data ) => {
		const payload = { ...data, source: 'form-contacto' }
		console.log( { payload } )
		// const resp = await addList( payload )
		// if ( resp.message === 'Done' ) {
		// 	console.log( resp )
		// 	setSended( true )
		// 	setTimeout( () => {
		// 		push( '/' )
		// 		setSended( false )
		// 	}, 1000 )
		// } else {
		// 	setSended( false )
		// }
	} )

	return (
		<section className='bg-x-color min-h-screen' id='contacto'>
			<article className='bg-[url("/v2/brands/bg-hero-ts.png")] bg-no-repeat bg-cover md:bg-top bg-right-top pb-12'>
				<article className='w-full  min-h-dvh flex flex-col justify-center items-center gap-y-16'>
					<form
						onSubmit={ onSubmit }
						className='w-full lg:w-1/4 md:w-1/2 lg:px-0 min-h-max px-6 pt-12 flex flex-col gap-y-1 '
					>
						<h1 className='font-medium title-font text-white text-2xl'>
							CONTACTO
						</h1>
						<h2 className='leading-relaxed text-2xl text-white'>
							¡Expertos en Solucionar!
						</h2>
						<div className='relative'>
							<input
								type='text'
								id='name'
								placeholder='Tu Nombre Completo'
								className='w-full bg-x-color  focus:border-slate-500 focus:ring-2 focus:ring-slate-900 text-xl outline-none text-slate-900 py-1 pl-2 leading-8 placeholder:text-2-color'
								{ ...register( 'fullname', {
									required: {
										value: true,
										message: 'introduce tu nombre completo',
									},
									minLength: {
										value: 4,
										message: 'introduce tu nombre completo',
									},
									maxLength: 16,
								} ) }
							/>
							{ errors.fullname && (
								<span>{ errors.fullname?.message }</span>
							) }
						</div>
						<div className='relative'>
							<input
								type='email'
								placeholder='email@mail.com'
								name='email'
								className='w-full bg-x-color focus:border-slate-500 focus:ring-2 focus:ring-slate-900 text-xl outline-none text-slate-900 py-1 px-3 leading-8 placeholder:text-2-color'
								{ ...register( 'email', {
									required: {
										value: true,
										message:
											'introduce tu correo electronico',
									},
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Ingrese un correo válido',
									},
								} ) }
							/>
							{ errors.email && (
								<span>{ errors.email?.message }</span>
							) }
						</div>
						<div className='relative'>
							<textarea
								id='message'
								name='message'
								placeholder='Escribe tu mensaje'
								className='w-full h-32 bg-x-color focus:ring-2 focus:ring-slate-900  text-xl outline-none text-slate-900 py-1 px-3 resize-none leading-6 placeholder:text-2-color placeholder:italic'
								{ ...register( 'message', {
									required: {
										value: true,
										message: 'introduce tu mensaje',
									},
								} ) }
							></textarea>
							{ errors.message && (
								<span>{ errors.message?.message }</span>
							) }
						</div>
						<button type='button' className='text-1-color bg-2-color border-0 py-2 px-6 focus:outline-none hover:bg-1-color hover:text-2-color   text-xl hover:uppercase'>
							Enviar Formulario
						</button>
						{ sended &&
							<p className='text-sm text-1-color text-opacity-90 mt-3'>
								¡Pronto un asesor se pondrá en contacto!
							</p> }
					</form>
					<article className='w-full lg:w-1/2 px-6 lg:px-0   '>
						<span className='flex justify-center items-center gap-y-2'>
							{/* Link Instagram */ }
							<a
								href={ LINK_INSTAGRAM }
								target='_blank'
								className='w-20 h-20 md:w-24 md:h-24 text-slate-100 hover:text-1-color hover:scale-105'
							>
								<SVGInstagram />
							</a>
							{/* Link Facebook */ }
							<a
								href={ LINK_FACEBOOK }
								target='_blank'
								rel='noopener noreferrer'
								className='w-20 h-20 md:w-24 md:h-24 text-slate-100 hover:text-1-color hover:scale-105'
							>
								<SVGFacebook />
							</a>
							<a
								href={ LINK_TWITTER }
								target='_blank'
								rel='noopener noreferrer'
								className='w-20 h-20 md:w-24 md:h-24 text-slate-100 hover:text-1-color hover:scale-105'
							>
								<SVGTwitter />
							</a>
							{/* Link Linkedin */ }
							<a
								href={ '/api/new' }
								target='_blank'
								rel='noopener noreferrer'
								className='w-20 h-20 md:w-24 md:h-24 text-slate-100 hover:text-1-color hover:scale-105'
							>
								<SVGLinkedin />
							</a>
						</span>
					</article>
					<div className='w-full h-16  md:w-1/2 flex px-6 lg:px-0'>
						<a
							href={ LINK_WS }
							target='_blank'
							rel='noopener noreferrer'
							className='w-full lg:w-1/2 mx-auto h-full flex items-center justify-center bg-cyan-400 text-2-color  hover:text-1-color hover:bg-2-color text-2xl border-0 hover:bg-[#25D366] hover:text-slate-800 outline-none text-center'
						>
							WhatsApp
						</a>
					</div>
				</article>
			</article>
		</section >
	)
}
