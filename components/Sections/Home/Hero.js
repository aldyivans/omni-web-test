const Hero = () => {
  return (
    <div className="container mx-auto px-6 pt-10 lg:pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center">
        <div className="lg:w-full sm:w-3/4 w-full mx-auto">
          <img src="/images/assets/hero_homepage.png" alt="Hero Homepage" className="mx-auto" />
        </div>
        <div className="mt-8 text-center lg:text-left">
          <h1 className="text-5xl font-serif leading-tight mb-4">Signaturing Experience</h1>
          <div className="mt-6 leading-loose pr-0 xl:pr-24 text-xl">
            <p>We bring the results while helping you achieve cost and time savings without taking on risk or management overhead. We bring the results while helping you without taking on risk or management overhead.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
