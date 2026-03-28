export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-6 py-16 md:py-24">

      {/* Name */}
      <div className="animate-fade-up animation-delay-200 text-center">
        <h1
          className="font-serif text-brand-white uppercase leading-none"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            letterSpacing: "0.35em",
          }}
        >
          Catherine Wallace
        </h1>
      </div>

      {/* Discipline */}
      <div className="animate-fade-up animation-delay-400 mt-4 md:mt-5 text-center">
        <p
          className="font-sans font-light text-brand-accent uppercase"
          style={{
            fontSize: "clamp(0.65rem, 1.8vw, 0.9rem)",
            letterSpacing: "0.5em",
          }}
        >
          Photography
        </p>
      </div>

      {/* Rule */}
      <div className="animate-fade-in animation-delay-400 mt-8 md:mt-10 w-16 h-px bg-brand-accent opacity-60" />

      {/* Coming Soon */}
      <div className="animate-fade-up animation-delay-600 mt-8 md:mt-10 text-center">
        <p
          className="font-sans font-light text-brand-light uppercase"
          style={{
            fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.5em",
          }}
        >
          Coming Soon
        </p>
      </div>

      {/* Tagline */}
      <div className="animate-fade-up animation-delay-800 mt-6 md:mt-8 text-center max-w-xs md:max-w-sm">
        <p
          className="font-serif italic font-normal text-brand-accent leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.1rem)" }}
        >
          Documenting real moments between you and your loved ones
        </p>
      </div>

      {/* Instagram */}
      <div className="animate-fade-up animation-delay-1000 mt-12 md:mt-16">
        <a
          href="https://instagram.com/catherinewallacephotography"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 border border-brand-accent/40 px-6 py-3 text-brand-light/70 font-sans font-light uppercase transition-all duration-300 ease-out hover:border-brand-accent hover:text-brand-white hover:bg-brand-accent/10"
          style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}
          aria-label="Follow Catherine Wallace Photography on Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          @catherinewallacephotography
        </a>
      </div>

      {/* Location */}
      <div className="animate-fade-in animation-delay-1000 mt-8 text-center">
        <p
          className="font-sans font-light text-brand-accent/40 uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "0.35em" }}
        >
          Port Moody, BC
        </p>
      </div>

    </main>
  );
}
