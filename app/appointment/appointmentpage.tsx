"use client"

import type React from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AppointmentPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get form values
    const form = e.currentTarget
    const fullName = (form.elements.namedItem("full-name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
    const practiceArea = (form.elements.namedItem("practice-area") as HTMLSelectElement).value
    const date = (form.elements.namedItem("date") as HTMLInputElement).value
    const time = (form.elements.namedItem("time") as HTMLSelectElement).value

    // Simple validation
    if (!fullName || !email || !phone || !practiceArea || !date || !time) {
      alert("Please fill in all required fields.")
      return
    }

    // In a real application, you would send this data to a server
    alert("Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.")

    // Reset the form
    form.reset()
  }

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <div className="content max-w-7xl mx-auto px-4">
        <Header />

        <section className="page-header text-center py-12 my-8">
          <h2 className="text-4xl font-bold">Book an Appointment</h2>
        </section>

        <section className="appointment-intro max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            Schedule a consultation with our experienced legal team. We're here to help you navigate your legal matters
            with expertise and dedication.
          </p>
        </section>

        <section className="appointment-form-container grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="form-section col-span-2 p-8 rounded-lg bg-card">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <form id="appointment-form" className="appointment-form space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="full-name" className="block mb-2 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="block mb-2 font-semibold">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="practice-area" className="block mb-2 font-semibold">
                  Practice Area *
                </label>
                <select
                  id="practice-area"
                  name="practice-area"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                >
                  <option value="">Select a Practice Area</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="real-estate">Real Estate Law</option>
                  <option value="estate-planning">Estate Planning</option>
                  <option value="employment">Employment Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-6">Preferred Appointment Time</h3>

              <div className="form-group">
                <label htmlFor="date" className="block mb-2 font-semibold">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time" className="block mb-2 font-semibold">
                  Preferred Time *
                </label>
                <select id="time" name="time" className="w-full p-3 rounded border bg-input border-input" required>
                  <option value="">Select a Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="alternate-date" className="block mb-2 font-semibold">
                  Alternate Date (Optional)
                </label>
                <input
                  type="date"
                  id="alternate-date"
                  name="alternate-date"
                  className="w-full p-3 rounded border bg-input border-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="alternate-time" className="block mb-2 font-semibold">
                  Alternate Time (Optional)
                </label>
                <select
                  id="alternate-time"
                  name="alternate-time"
                  className="w-full p-3 rounded border bg-input border-input"
                >
                  <option value="">Select a Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Brief Description of Your Legal Matter *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="checkbox-label flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="terms" className="rounded border-input" required />I agree to the terms
                  and conditions *
                </label>
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className="submit-button w-full p-3 bg-accent-gold text-dark-text font-semibold rounded hover:translate-y-[-3px] transition-transform"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>

          <div className="appointment-info space-y-6">
            <div className="info-box p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <p className="mb-3">
                After submitting your appointment request, you will receive a confirmation email. Our team will review
                your information and contact you to confirm your appointment time.
              </p>
              <p>
                Initial consultations typically last 30-60 minutes, during which we'll discuss your legal needs and
                potential strategies.
              </p>
            </div>

            <div className="info-box p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">Office Location</h3>
              <p>
                Addis Ababa, Megenagna
                <br />
                Sileshi Building, Room 802
              </p>
              <div className="map-placeholder rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Office Location Map"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>

            <div className="info-box p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-3">If you need immediate assistance, please contact us directly:</p>
              <p>
                Phone: +251991439979
                <br />
                Email:{" "}
                <a href="mailto:info@tamiratlaw.com" className="text-accent-gold">
                  info@tamiratlaw.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

