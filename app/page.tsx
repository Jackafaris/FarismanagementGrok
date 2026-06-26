"use client";

import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { sendInterestEmail } from "./actions";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Square,
  Home,
  Shield,
  HeartHandshake,
  Mail,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const featuredProperty = {
  id: "930-bellestri",
  address: "930 Bellestri",
  city: "Saint Louis, MO",
  neighborhood: "South St. Louis",
  rent: null as number | null,
  bedrooms: null as number | null,
  bathrooms: null as number | null,
  sqft: null as number | null,
  type: "Residential Rental",
  available: "Available Now",
  description:
    "A well-maintained Saint Louis home ready for its next residents. Bright living spaces, a practical layout, and a location that keeps you close to everything the city offers.",
  features: [
    "Move-in ready",
    "Responsive local management",
    "Quiet residential block",
    "Convenient Saint Louis location",
    "Professional screening process",
  ],
  images: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  ],
  mapUrl: "https://maps.google.com/?q=930+Bellestri+St+Louis+MO",
};

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  interestedProperty: `${featuredProperty.address}, ${featuredProperty.city}`,
  message: "",
};

type FormData = typeof emptyForm;

function formatOptional(value: number | null, suffix = "") {
  return value ? `${value.toLocaleString()}${suffix}` : "Contact for details";
}

export default function FarisManagementSite() {
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const openInterestForm = () => {
    setFormData({
      ...emptyForm,
      message: `I'm interested in renting ${featuredProperty.address} in Saint Louis.`,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData(emptyForm);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("interestedProperty", formData.interestedProperty);
    data.append("message", formData.message);

    const result = await sendInterestEmail(data);

    if (result.success) {
      toast.success("Thank you! Your inquiry has been sent.", {
        description: "Faris Management will be in touch soon.",
      });
      closeModal();
    } else {
      toast.error(result.error || "Something went wrong. Please try again.", {
        description: "You can also email shirinefaris@gmail.com directly.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#property" className="transition hover:text-neutral-600">
              Property
            </a>
            <a href="#about" className="transition hover:text-neutral-600">
              About
            </a>
            <a href="#contact" className="transition hover:text-neutral-600">
              Contact
            </a>
            <button onClick={openInterestForm} className="btn-black rounded-lg px-5 py-2.5">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-4 py-1.5 text-sm">
              <MapPin className="h-4 w-4" />
              Saint Louis, Missouri
            </div>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
              Local homes.
              <br />
              Managed with care.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
              Faris Management is a small, locally owned company helping Saint Louis residents
              find quality rental homes — starting with our available property at{" "}
              <span className="font-medium text-black">{featuredProperty.address}</span>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={openInterestForm} className="btn-black rounded-xl px-8 py-3.5 text-base">
                Express Interest
              </button>
              <a
                href="#property"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-8 py-3.5 text-base font-medium transition hover:bg-neutral-50"
              >
                View Property
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-black/5 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src={featuredProperty.images[0]}
                alt={`${featuredProperty.address} exterior`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-lg md:-left-8">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Now Leasing</div>
              <div className="mt-1 text-lg font-semibold">{featuredProperty.address}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="property" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Featured Listing
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {featuredProperty.address}
            </h2>
            <p className="mt-2 flex items-center gap-2 text-neutral-600">
              <MapPin className="h-4 w-4" />
              {featuredProperty.neighborhood}, {featuredProperty.city}
            </p>
          </div>
          <div className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            {featuredProperty.available}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-white">
              <img
                src={featuredProperty.images[activeImage]}
                alt={`${featuredProperty.address} photo ${activeImage + 1}`}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex gap-3 border-t border-black/5 p-4">
                {featuredProperty.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      activeImage === index ? "border-black" : "border-transparent opacity-70"
                    }`}
                  >
                    <img src={image} alt="" className="h-16 w-24 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <Bed className="mb-3 h-5 w-5" />
                <div className="text-sm text-neutral-500">Bedrooms</div>
                <div className="mt-1 text-xl font-semibold">
                  {formatOptional(featuredProperty.bedrooms)}
                </div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <Bath className="mb-3 h-5 w-5" />
                <div className="text-sm text-neutral-500">Bathrooms</div>
                <div className="mt-1 text-xl font-semibold">
                  {formatOptional(featuredProperty.bathrooms)}
                </div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-5">
                <Square className="mb-3 h-5 w-5" />
                <div className="text-sm text-neutral-500">Square Feet</div>
                <div className="mt-1 text-xl font-semibold">
                  {formatOptional(featuredProperty.sqft, " sqft")}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 bg-white p-8">
              <div className="text-sm text-neutral-500">Monthly Rent</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight">
                {featuredProperty.rent
                  ? `$${featuredProperty.rent.toLocaleString()}`
                  : "Contact for pricing"}
              </div>
              <p className="mt-4 leading-relaxed text-neutral-600">{featuredProperty.description}</p>
              <ul className="mt-6 space-y-3">
                {featuredProperty.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={openInterestForm}
                className="btn-black mt-8 w-full rounded-xl py-3.5 font-medium"
              >
                Request a Showing
              </button>
            </div>

            <a
              href={featuredProperty.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl border border-black/5 bg-white p-8 transition hover:border-black/15"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-neutral-500">Location</div>
                  <div className="mt-1 font-semibold">View on Google Maps</div>
                </div>
                <MapPin className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/5 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              About Faris Management
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              A local team you can actually reach.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              We are a small Saint Louis property management company focused on keeping homes
              well-maintained and matching the right residents with the right properties. When you
              reach out, you are talking to real people — not a call center.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Quality Homes",
                copy: "Properties maintained with attention to detail so residents feel at home from day one.",
              },
              {
                icon: HeartHandshake,
                title: "Personal Service",
                copy: "Direct communication with a local team that knows Saint Louis neighborhoods.",
              },
              {
                icon: Shield,
                title: "Professional Process",
                copy: "Clear expectations, straightforward applications, and responsive follow-up.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-3xl border border-black/5 bg-[#fafafa] p-8"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-white p-3 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-[32px] border border-black/5 bg-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">Contact</div>
            <h2 className="text-4xl font-semibold tracking-tight">Ready to rent?</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Tell us a little about yourself and we will follow up about{" "}
              {featuredProperty.address}. You can also reach us directly using the information below.
            </p>

            <div className="mt-8 space-y-4 text-neutral-700">
              <a
                href="mailto:shirinefaris@gmail.com"
                className="flex items-center gap-3 transition hover:text-black"
              >
                <Mail className="h-5 w-5" />
                shirinefaris@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                Saint Louis, Missouri
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="input"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="(314) 555-0123"
                />
              </div>
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input min-h-[120px] resize-y"
                placeholder="Tell us when you'd like to tour, move-in timing, or any questions."
              />
            </div>
            <input type="hidden" name="interestedProperty" value={formData.interestedProperty} />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-black w-full rounded-xl py-3.5 font-medium disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>© {new Date().getFullYear()} Faris Management. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>Saint Louis, Missouri</span>
            <a href="mailto:shirinefaris@gmail.com" className="hover:text-black">
              shirinefaris@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="modal w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <div className="font-semibold">Express Interest</div>
                <div className="text-sm text-neutral-600">{featuredProperty.address}</div>
              </div>
              <button onClick={closeModal} className="text-neutral-400 transition hover:text-black">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label className="label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="input min-h-[100px] resize-y"
                />
              </div>
              <input type="hidden" name="interestedProperty" value={formData.interestedProperty} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-black w-full rounded-xl py-3.5 font-medium disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
