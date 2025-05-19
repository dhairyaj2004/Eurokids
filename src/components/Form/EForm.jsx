import { useState } from "react";

export default function Form() {


  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-center text-purple-700">
        Student Enquiry Form
      </h1>

      {/* 16 × 25 ratio box that scales with width */}
      <div className="relative w-full pt-[155%] sm:pt-[120%] lg:pt-[95%]">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvKciCQSXJrHnEBHh7orPcFCFX0sQB6gnbvVg1BbbkyiIv3w/viewform?embedded=true" width="640" height="1540" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading…</iframe>
      </div>
    </section>
  );
}
