export function HeroSection(props) {
  return (
    <section className="hero-section bg-center w-full flex items-center mb-12">
      <div className="text-left ml-10 lg:ml-20 text-white w-2/3 md:w-1/3">
        <h1 className="text-5xl font-semibold">
          Workout <span className="text-brandOrange">from anywhere!</span>
          <span className="ml-3" />Join the community for free!
        </h1>
        <p className="my-1">
          Unlimited access to the world’s best workouts from top trainers.
        </p>
        <button className="btn primary sign-up-btn capitalize font-semibold p-2 rounded">
          SIGN UP FOR FREE
        </button>
      </div>
    </section>
  )
}