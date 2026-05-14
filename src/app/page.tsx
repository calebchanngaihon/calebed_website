import Scene from "@/components/canvas/Scene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-950">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl">
          Hello World
        </h1>
      </div>

      <div className="relative flex place-items-center w-full h-[60vh] max-w-5xl rounded-xl overflow-hidden border border-zinc-800 bg-black mt-8">
        <Scene />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-zinc-400 mt-12">
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Ready to build your high-end 3D portfolio.
        </p>
      </div>
    </main>
  );
}
