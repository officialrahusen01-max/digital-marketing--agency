import { Button } from "../components/ui/primitives.jsx";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-night py-24 text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
      <div className="container-x text-center">
        <p className="text-gradient text-8xl font-extrabold sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-extrabold sm:text-5xl">This page needs a next life.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-400">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" arrow>Back to home</Button>
          <Button to="/services" variant="outline-dark">Our services</Button>
        </div>
      </div>
    </main>
  );
}
