import { useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const data = Object.fromEntries(new FormData(e.target)); // { Name, Email, Message }

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMsg("Thanks! We’ll get back to you soon.");
        e.target.reset();
      } else {
        setMsg("Something went wrong. Please try again.");
      }
    } catch {
      setMsg("Network error. Please try again.");
    }
    setLoading(false);
  }

  return (
     <section className="mx-auto max-w-3xl px-4 py-16">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvKciCQSXJrHnEBHh7orPcFCFX0sQB6gnbvVg1BbbkyiIv3w/viewform?embedded=true" width="640" height="1356" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </section>
      

  );
}
