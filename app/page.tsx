"use client";

import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { sendInterestEmail } from "./actions";
import { X, MapPin, Bed, Bath, Square } from "lucide-react";
import { toast } from "sonner";

// Property data - two rental properties
const properties = [
  {
    id: "930-bellestri",
    address: "930 Bellestri",
    city: "Austin, TX",
    rent: 2750,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1920,
    type: "Single Family Home",
    description: "Beautifully updated single-family home with modern finishes, a spacious backyard, and excellent natural light. Perfect for families or professionals seeking quality and convenience.",
    features: ["Updated kitchen", "Large private backyard", "Two-car garage", "Walk-in closets", "New HVAC"],
    images: [
      "https://picsum.photos/id/1015/1200/800",
      "https://picsum.photos/id/160/1200/800",
      "https://picsum.photos/id/201/1200/800",
    ],
    lat: 30.2672,
    lng: -97.7431,
  },
  {
    id: "1008-dorne-dr",
    address: "1008 Dorne Dr",
    city: "Austin, TX",
    rent: 2450,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    type: "Single Family Home",
    description: "Charming and well-maintained home in a quiet neighborhood. Features a functional layout, generous living spaces, and a lovely fenced yard. Great value in a desirable area.",
    features: ["Fenced backyard", "Open living area", "Updated bathrooms", "Quiet street", "Mature trees"],
    images: [
      "https://picsum.photos/id/1033/1200/800",
      "https://picsum.photos/id/251/1200/800",
      "https://picsum.photos/id/180/1200/800",
    ],
    lat: 30.2849,
    lng: -97.7244,
  },
];

type Property = typeof properties[0];

export default function FarismanagementSite() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedProperty: "",
    message: "",
  });

  const openInterestForm = (property: Property) => {
    setSelectedProperty(property);
    setFormData((prev) => ({
      ...prev,
      interestedProperty: `${property.address}, ${property.city}`,
      message: `I'm interested in renting ${property.address}.`,
    }));
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interestedProperty: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      toast.success("Thank you! Your inquiry has been sent. We'll be in touch soon.", {
        description: "Farismanagement",
      });
      closeModal();
    } else {
      toast.error(result.error || "Something went wrong. Please try again.", {
        description: "Try emailing shirinefaris@gmail.com directly.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#properties" className="hover:text-gray-600 transition">Properties</a>
            <a href="#locations" className="hover:text-gray-600 transition">Locations</a>
            <a href="#about" className="hover:text-gray-600 transition">About</a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-black px-5 py-2 rounded-md text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-sm mb-6">
            Austin, TX • Premium Rentals
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Thoughtfully<br />managed homes.
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-10">
            Farismanagement offers quality rental properties with exceptional care and attention to detail.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#properties" className="btn-black px-8 py-3.5 rounded-lg text-base font-medium">
              View Available Homes
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-lg border border-black text-base font-medium hover:bg-gray-50">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-gray-500 mb-2">Available Now</div>
            <h2 className="text-5xl font-semibold tracking-tight">Featured Properties</h2>
          </div>
          <p className="text-gray-600 max-w-xs hidden md:block text-right">
            Two exceptional homes currently available for rent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="card group bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img 
                  src={property.images[0]} 
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-md text-sm font-medium shadow">
                  ${property.rent.toLocaleString()}/mo
                </div>
              </div>
              
              <div className="p-8">
                <div>
                  <div className="font-semibold text-2xl tracking-tight">{property.address}</div>
                  <div className="text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" /> {property.city}
                  </div>
                </div>

                <div className="flex items-center gap-6 my-6 text-sm border-y border-gray-100 py-4">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" /> {property.bedrooms} Beds
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" /> {property.bathrooms} Baths
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="w-4 h-4" /> {property.sqft.toLocaleString()} sqft
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {property.description}
                </p>

                <button 
                  onClick={() => openInterestForm(property)}
                  className="btn-black w-full py-3.5 rounded-lg font-medium"
                >
                  Express Interest in {property.address}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations / Map Section */}
      <section id="locations" className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="uppercase tracking-[3px] text-xs text-gray-500 mb-2">Where we are</div>
            <h2 className="text-5xl font-semibold tracking-tight">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-2xl">{property.address}</div>
                    <div className="text-gray-600">{property.city}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-semibold tabular-nums">${property.rent}</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                  <div className="flex justify-between py-2 border-b">
                    <span>Property Type</span> 
                    <span className="font-medium text-black">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Bedrooms</span> 
                    <span className="font-medium text-black">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Bathrooms</span> 
                    <span className="font-medium text-black">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Square Feet</span> 
                    <span className="font-medium text-black">{property.sqft.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Both homes are located in desirable Austin neighborhoods. Exact addresses shared upon interest.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="uppercase tracking-[3px] text-xs text-gray-500 mb-3">Farismanagement</div>
        <h2 className="text-5xl font-semibold tracking-tighter mb-6">Professional. Personal. Precise.</h2>
        <div className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          We specialize in managing high-quality rental properties with integrity and care. 
          Every home is maintained to the highest standard so our residents can focus on what matters most.
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-gray-200 py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[3px] text-xs text-gray-500 mb-3">Ready to Learn More?</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-10">Fill out the form below or reach out directly to express interest in one of our properties.</p>

          <button 
            onClick={() => openInterestForm(properties[0])}
            className="btn-black px-10 py-4 rounded-lg font-medium text-base"
          >
            Inquire About a Property
          </button>

          <div className="mt-12 text-sm text-gray-500">
            Or email us directly: <a href="mailto:shirinefaris@gmail.com" className="underline">shirinefaris@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Farismanagement. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Austin, Texas</span>
            <a href="mailto:shirinefaris@gmail.com">shirinefaris@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Interest Modal / Contact Form */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="modal bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <div className="font-semibold">Express Interest</div>
                <div className="text-sm text-gray-600">{selectedProperty.address}</div>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="label">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="(512) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label className="label">Property You're Interested In</label>
                <select 
                  name="interestedProperty" 
                  value={formData.interestedProperty} 
                  onChange={handleInputChange}
                  className="input"
                  required
                >
                  {properties.map((p) => (
                    <option key={p.id} value={`${p.address}, ${p.city}`}>
                      {p.address} — {p.city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="input resize-y min-h-[100px]"
                  placeholder="Tell us a bit about yourself or any questions you have..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-black w-full py-3.5 rounded-lg font-medium disabled:opacity-70"
              >
                {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
              </button>

              <p className="text-center text-xs text-gray-500">
                Your inquiry will be sent directly to Farismanagement.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
