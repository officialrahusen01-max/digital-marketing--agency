import EnquiryForm from "../../components/EnquiryForm.jsx";

export default function EnquirySubmit() {
  return (
    <main className="bg-ink text-cream">
      <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-[6vw] lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute -right-20 top-8 -z-10 h-[420px] w-[420px] rounded-full border border-coral/20" />
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-mist">
            <span className="inline-block h-2 w-2 rounded-full bg-coral align-middle shadow-[0_0_16px_rgba(0,221,204,0.8)]" />
            <span className="ml-3">Enquiry</span>
          </p>
          <h1 className="max-w-[900px] text-[clamp(3.2rem,7vw,7rem)] leading-[0.88] tracking-[-0.08em]">
            Start your next <span className="text-coral">growth move.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/75 sm:text-xl">
            Tell us what you want to build, improve, or scale. We will review your enquiry and get back to you soon.
          </p>
        </div>
      </section>

      <EnquiryForm />
    </main>
  );
}
