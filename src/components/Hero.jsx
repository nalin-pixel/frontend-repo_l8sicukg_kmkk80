function Hero() {
  return (
    <section className="relative">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
