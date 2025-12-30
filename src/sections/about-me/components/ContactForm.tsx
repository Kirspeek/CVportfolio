"use client";

import React, { useState } from "react";
import AboutInfoBox from "./AboutInfoBox";
import type { ContactFormProps } from "../types";

export default function ContactForm({ id = "contact" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "cherepenko.iryna@gmail.com",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="pt-4 md:pt-10 pb-16 md:pb-20">
      <div className="px-4 sm:px-6 flex justify-center">
        <AboutInfoBox
          style={{
            width: "min(980px,96vw)",
            margin: "0 auto",
          }}
        >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block h-4 w-1.5 rounded-full"
                  style={{ background: "#ff6b4a" }}
                />
                <h3
                  className="m-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    color: "var(--primary-text)",
                  }}
                >
                  Contact Me
                </h3>
              </div>
              
              <div className="mt-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:cherepenko.iryna@gmail.com"
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ color: "#ff6b4a" }}>▹</span> Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/irynacherepenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ color: "#ff6b4a" }}>▹</span> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Kirspeek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ color: "#ff6b4a" }}>▹</span> GitHub
                  </a>
                  <a
                    href="https://t.me/kirstnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ color: "#ff6b4a" }}>▹</span> Telegram
                  </a>
                </div>
              </div>
              
              <div className="mt-2 mb-6" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--primary-text)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      backgroundColor: "var(--background)",
                      borderColor: "#bdbdbd",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--primary-text)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      backgroundColor: "var(--background)",
                      borderColor: "#bdbdbd",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--primary-text)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded resize-none"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      color: "var(--primary-text)",
                      backgroundColor: "var(--background)",
                      borderColor: "#bdbdbd",
                    }}
                  />
                </div>

                {submitStatus === "success" && (
                  <div
                    className="p-3 rounded"
                    style={{
                      backgroundColor: "rgba(76, 175, 80, 0.1)",
                      color: "#4caf50",
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                    }}
                  >
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="p-3 rounded"
                    style={{
                      backgroundColor: "rgba(244, 67, 54, 0.1)",
                      color: "#f44336",
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                    }}
                  >
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 border rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    color: "var(--primary-text)",
                    backgroundColor: "var(--background)",
                    borderColor: "#ff6b4a",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
        </AboutInfoBox>
      </div>
    </section>
  );
}
