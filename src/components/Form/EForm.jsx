import { useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    /* …you can delete this whole handler now that you’re using an iframe,
       but I’m leaving it in case you come back to a custom form… */
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-center text-purple-700">
        Student Enquiry Form
      </h1>

      {/* 16 × 25 ratio box that scales with width */}
      <div className="relative w-full pt-[155%] sm:pt-[120%] lg:pt-[95%]">
        <iframe
          title="Google enquiry form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScvKciCQSXJrHnEBHh7orPcFCFX0sQB6gnbvVg1BbbkyiIv3w/viewform?embedded=true"
          className="absolute inset-0 h-full w-full rounded-xl shadow-lg
                     border border-gray-200"
          loading="lazy"
        />
      </div>
    </section>
  );
}
