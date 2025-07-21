import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/types/types";
import { FetchData } from "@/lib/fetchAPi";

export default function Contacto() {
	// const { push } = useRouter()
	const [sended, setSended] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>( {} );

	type responseAPI = {
		response?: string | undefined;
		status: number
	};

	const onSubmit = handleSubmit(async (data: ContactFormData) => {
		const payload: ContactFormData = {
			...data,
			source: "form-contacto-portfolio",
		};
		const response = await FetchData(payload);
		const responseAPI: responseAPI = response ?? { response: undefined, status: 500 };
		console.log(responseAPI.status, responseAPI.response);
		setSended(true);
	});

	return (
		<section className="contacto" id="contacto">
			<article className="contacto-article">
				<form onSubmit={onSubmit} className="contacto-form">
					<h1>CONTACTO</h1>
					<h2>¡Experto en Solucionar!</h2>
					<input
						type="text"
						id="name"
						placeholder="Tu Nombre Completo"
						className="contacto-input"
						{...register("fullname", {
							required: {
								value: true,
								message: "introduce tu nombre completo",
							},
							minLength: {
								value: 4,
								message: "introduce tu nombre completo",
							},
							maxLength: 16,
						})}
					/>
					{errors.fullname && <span>{errors.fullname?.message}</span>}
					<input
						type="email"
						placeholder="email@mail.com"
						className="contacto-input"
						{...register("email", {
							required: {
								value: true,
								message: "introduce tu correo electronico",
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Ingrese un correo válido",
							},
						})}
					/>
					{errors.email && <span>{errors.email?.message}</span>}
					<textarea
						id="message"
						placeholder="Escribe tu mensaje"
						className="contacto-input contacto-message"
						{...register("message", {
							required: {
								value: true,
								message: "introduce tu mensaje",
							},
						})}
					></textarea>
					{errors.message && <span>{errors.message?.message}</span>}
					<div className="div-btn">
						<button type="submit" className="contacto-btn">
							¡enviar!
						</button>
					</div>
				</form>
				{sended && (
					<p className="text-sm text-1-color text-opacity-90 mt-3">
						¡Pronto un asesor se pondrá en contacto!
					</p>
				)}
			</article>
		</section>
	);
}
