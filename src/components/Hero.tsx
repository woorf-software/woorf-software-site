export default function Hero() {
  return (
    <main class="flex h-screen flex-col overflow-hidden">
      <nav class="shrink-0"></nav>
      <section class="flex flex-1 items-center justify-center px-4">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="font-bold tracking-tight sm:text-4xl md:text-5xl">
            The software you need
          </h1>
          <p class="mt-6 text-2xl leading-8 text-gray-600">
            Simple, reliable, fast.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" class="btn-primary">
              Contact us
            </a>
            <a href="#our-software" class="btn-outline">
              See our current software
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
