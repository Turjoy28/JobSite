const Hero = ({
  title = 'Become a React Dev',
  subtitle = 'Find the React Job that fits your skillset'
}) => {
  return (
    <section className="hero-gradient py-24 mb-4">
      {/* Decorative orbs */}
      <div
        className="hero-orb"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          top: '-80px',
          right: '10%',
          animationDuration: '7s',
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          bottom: '-40px',
          left: '15%',
          animationDuration: '9s',
          animationDelay: '-3s',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        <div className="text-center">
          <h1 className="hero-title text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-4">
            {title}
          </h1>
          <p className="hero-subtitle text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
