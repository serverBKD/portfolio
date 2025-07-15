export default function Hero() {
  return (
    <section className="hero">
      <article className="hero-text">
        <h1>Carlos Manuel Bravo Araújo</h1>
      </article>
      <article className="hero-img">
        <img
          src="./assets/cmba-photo-cv-about-me.png"
          alt="cmba-photo-cv-about-me"
          width={ 1080 }
          height={ 960 }
          loading="lazy"
          decoding="async"
          id="img-avatar"
        />
      </article>
    </section>
  );
}
