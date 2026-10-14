import { Ban, Gauge, Settings } from "lucide-solid";

export default function Hero() {
  const features = [
    {
      icon: <Ban/>,
      title: "No AI-Generated Code",
      desc: "All software code is human written and reviewed.",
    },
    {
      icon: <Settings/>,
      title: "Minimal & Reliable by Design",
      desc: "Fewer moving parts, fewer surprises, predictable behavior.",
    },
    {
      icon: <Gauge/>,
      title: "Optimized Performance",
      desc: "Fast load times and smooth interactions, out of the box.",
    },
  ];

  return (
    <section class="flex min-h-[calc(100dvh-4rem)] flex-1 items-center justify-center px-4">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-4xl font-bold tracking-tight md:text-6xl">
          The software you need
        </h1>
        <p class="mt-6 text-2xl leading-8 text-gray-600">
          Simple, reliable, and fast.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            class="btn-primary"
          >
            Contact
          </a>
          <a
            href="#learn-more"
            class="btn-outline"
          >
            Our software
          </a>
        </div>

        <div class="mt-16 grid grid-cols-1 sm:grid-cols-3">
          {features.map((f) => (
            <div class="border-l-0 sm:border-l sm:border-r border-gray-200 px-6 py-4">
              <span class="text-gray-400 flex justify-center">{f.icon}</span>
              <h3 class="mt-2 font-semibold text-gray-900">{f.title}</h3>
              <p class="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
