export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] bg-neutral-950 text-neutral-200 flex flex-col justify-center">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Everything at Mahindra University. One dashboard.
        </h1>

        <p className="mt-4 text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed">
          MUniverse brings announcements, academic resources, and campus
          updates together so students and faculty can find what they need
          instantly.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/dashboard"
            className="rounded-md bg-white text-black text-sm font-medium px-6 py-2 hover:bg-transparent hover:text-white transition-all ease-in-out transition-duration-800"
          >
            Open Dashboard
          </a>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Mahindra University login required
        </p>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 mt-14 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 backdrop-blur p-5 hover:border-neutral-700 transition">
          <h3 className="text-sm font-medium text-white">Announcements</h3>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            Important notices and updates from the university and departments.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 backdrop-blur p-5 hover:border-neutral-700 transition">
          <h3 className="text-sm font-medium text-white">Resources</h3>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            Access academic materials, documents, and shared course resources.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 backdrop-blur p-5 hover:border-neutral-700 transition">
          <h3 className="text-sm font-medium text-white">Campus Updates</h3>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            Stay informed about events, schedules, and campus information.
          </p>
        </div>
      </section>
    </main>
  );
}