export default function Hero() {
	return (
		<section className="hero">
			<section className="hero-box flex">
				<article className="hero-img ">
					<img
						src="./assets/avatar/avatar-cmba.png"
						alt="cmba-photo-cv-about-me"
						width={1080}
						height={960}
						loading="lazy"
						decoding="async"
						id="img-avatar"
					/>
				</article>
				<article className="hero-text">
					<h1>JS | TypeScript | NodeJS | Python</h1>
					<h2>Desarrollador FullStack</h2>
					{/* <h4>about me</h4> */}
					<p id="hero-text-p">
						Soy desarrollador web apasionado por crear aplicaciones escalables,
						visualmente atractivas y con experiencias de usuario intuitivas.
						Trabajo principalmente con{" "}
						<span id="hero-span">
							{" "}
							HTML5, CSS3, JS, Vue.js, Reactjs, Next.js, Node.js, y Python
						</span>{" "}
						integrando diseño estético y optimización técnica en cada proyecto.
					</p>
				</article>
			</section>
		</section>
	);
}

// <p>
//   About Me
//   Hola, soy Carlos 👋 Soy desarrollador web apasionado por crear aplicaciones escalables, visualmente atractivas y con experiencias de usuario intuitivas. Trabajo principalmente con Quasar, Vue Flow, Next.js y Node.js, integrando diseño estético y optimización técnica en cada proyecto.

//   🎨 Combino lógica y creatividad: disfruto personalizar nodos, refinar layouts y aplicar paletas de colores elegantes como Blanco Perla o Blanco Humo. Además, experimento con herramientas como Krita para explorar el diseño digital.

//   🛠️ Me especializo en:

//   Resolución de errores complejos como hydration mismatches en Next.js

//   Optimización de interacciones con técnicas como useDebounce

//   Linting y formato estricto con ESLint, Biome y Prettier

//   Diagnóstico de procesos en Linux y configuración de entornos Docker

//   🌐 Actualmente exploro integración web-móvil con shadcn/ui en React Native, y me intriga el potencial del Machine Learning y DevOps.

//   Soy curioso, metódico y siempre estoy buscando formas de mejorar tanto el código como la experiencia del usuario. Bienvenido a mi mundo de desarrollo.
// </p>
