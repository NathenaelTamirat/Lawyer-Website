"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  const handleSearch = () => {
    // Search functionality is implemented directly in the rendering logic below
  }

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <div className="content max-w-7xl mx-auto px-4">
        <Header />

        <section className="page-header text-center py-12 my-8">
          <h2 className="text-4xl font-bold">Legal News & Insights</h2>
        </section>

        <section className="news-container grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="news-sidebar space-y-8 order-2 lg:order-1">
            <div className="search-box flex">
              <input
                type="text"
                placeholder="Search articles..."
                id="news-search"
                className="flex-1 p-3 rounded-l border-y border-l bg-input border-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="button"
                id="search-btn"
                className="p-3 bg-accent-gold text-dark-text rounded-r"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            <div className="categories p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "all" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("all")
                    }}
                  >
                    All Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "corporate" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("corporate")
                    }}
                  >
                    Corporate Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "family" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("family")
                    }}
                  >
                    Family Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "criminal" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("criminal")
                    }}
                  >
                    Criminal Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "property" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("property")
                    }}
                  >
                    Property Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`category-link block py-2 transition-colors ${activeCategory === "employment" ? "text-accent-gold" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleCategoryClick("employment")
                    }}
                  >
                    Employment Law
                  </a>
                </li>
              </ul>
            </div>

            <div className="recent-posts p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#property-law" className="hover:text-accent-gold transition-colors">
                    New Property Law Changes Impact Homeowners
                  </a>
                </li>
                <li>
                  <a href="#corporate-case" className="hover:text-accent-gold transition-colors">
                    Tamirat Bizuneh Wins Major Corporate Case
                  </a>
                </li>
                <li>
                  <a href="#employment-rights" className="hover:text-accent-gold transition-colors">
                    Understanding Your Rights in Employment Disputes
                  </a>
                </li>
                <li>
                  <a href="#family-law" className="hover:text-accent-gold transition-colors">
                    Child Custody Laws: What's Changed in 2025
                  </a>
                </li>
                <li>
                  <a href="#criminal-defense" className="hover:text-accent-gold transition-colors">
                    New Precedent Set in Criminal Defense Case
                  </a>
                </li>
              </ul>
            </div>

            <div className="newsletter p-6 rounded-lg bg-card">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4">Stay updated with the latest legal news and insights.</p>
              <form
                id="newsletter-form"
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you for subscribing to our newsletter!")
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded border bg-input border-input"
                  required
                />
                <button type="submit" className="w-full p-3 bg-accent-gold text-dark-text font-semibold rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="news-content col-span-3 order-1 lg:order-2">
            <article
              className="news-article mb-12 p-8 rounded-lg bg-card"
              id="property-law"
              data-category="property"
              style={{
                display:
                  (activeCategory === "all" || activeCategory === "property") &&
                  (!searchTerm || "new property law changes impact homeowners".includes(searchTerm.toLowerCase()))
                    ? "block"
                    : "none",
              }}
            >
              <div className="article-header mb-6">
                <h3 className="text-2xl font-bold">New Property Law Changes Impact Homeowners</h3>
                <div className="article-meta flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span className="article-date">May 15, 2025</span>
                  <span className="article-author">By Tamirat Bizuneh</span>
                  <span className="article-category">Property Law</span>
                </div>
              </div>
              <div className="article-content">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Property Law Changes"
                  width={800}
                  height={400}
                  className="article-image w-full rounded-lg mb-6 object-cover"
                />
                <p className="mb-4">
                  Recent legislative changes have significant implications for property owners across the country. The
                  new Property Rights and Responsibilities Act, which came into effect last month, introduces several
                  key modifications that homeowners should be aware of.
                </p>

                <p className="mb-4">
                  One of the most notable changes involves easement rights and boundary disputes. Under the new law,
                  property owners have enhanced protections against encroachments, but also face stricter requirements
                  for maintaining boundary markers and respecting neighboring properties.
                </p>

                <p className="mb-4">
                  Additionally, the act introduces new disclosure requirements for sellers, particularly regarding
                  environmental factors and historical land use. This means that sellers must now provide more
                  comprehensive information about potential environmental hazards or previous industrial use of the
                  property.
                </p>

                <p className="mb-4">
                  For homeowners' associations, the law establishes clearer guidelines on governance and fee structures,
                  potentially limiting certain types of fee increases and requiring more transparent financial
                  reporting.
                </p>

                <p className="mb-4">
                  If you're a property owner, it's essential to understand how these changes might affect your rights
                  and responsibilities. Our team at Tamirat Bizuneh Law Firm is available to help you navigate these new
                  regulations and ensure your property interests are protected.
                </p>

                <div className="article-tags mt-8 pt-4 border-t border-border">
                  <span className="font-semibold mr-2">Tags:</span>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Property Law
                  </a>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Homeowners
                  </a>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Legal Changes
                  </a>
                </div>
              </div>
            </article>

            <article
              className="news-article mb-12 p-8 rounded-lg bg-card"
              id="corporate-case"
              data-category="corporate"
              style={{
                display:
                  (activeCategory === "all" || activeCategory === "corporate") &&
                  (!searchTerm || "tamirat bizuneh wins major corporate case".includes(searchTerm.toLowerCase()))
                    ? "block"
                    : "none",
              }}
            >
              <div className="article-header mb-6">
                <h3 className="text-2xl font-bold">Tamirat Bizuneh Wins Major Corporate Case</h3>
                <div className="article-meta flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span className="article-date">May 8, 2025</span>
                  <span className="article-author">By Sarah Alemayehu</span>
                  <span className="article-category">Corporate Law</span>
                </div>
              </div>
              <div className="article-content">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Corporate Case Victory"
                  width={800}
                  height={400}
                  className="article-image w-full rounded-lg mb-6 object-cover"
                />
                <p className="mb-4">
                  We're pleased to announce that our firm has successfully represented Addis Technologies, a local
                  software development company, in a complex corporate litigation matter against a multinational
                  corporation.
                </p>

                <p className="mb-4">
                  The case involved allegations of intellectual property infringement and breach of contract. After
                  months of careful preparation and strategic advocacy, our team, led by Tamirat Bizuneh, secured a
                  favorable settlement that not only compensated our client for damages but also established important
                  protections for their innovative software solutions.
                </p>

                <p className="mb-4">
                  "This case demonstrates the importance of having experienced legal representation when facing larger
                  corporate entities," said Tamirat Bizuneh. "Our client's intellectual property is the foundation of
                  their business, and we're proud to have helped protect their innovations and secure their future
                  growth."
                </p>

                <p className="mb-4">
                  The settlement includes a substantial monetary component as well as licensing agreements that will
                  provide ongoing revenue for Addis Technologies. Perhaps most importantly, the resolution establishes
                  clear boundaries for the use of our client's proprietary technology.
                </p>

                <p className="mb-4">
                  This case highlights our firm's commitment to protecting the interests of local businesses and
                  entrepreneurs against larger corporate entities. Our deep understanding of both intellectual property
                  law and corporate litigation strategies allows us to effectively advocate for our clients in even the
                  most challenging circumstances.
                </p>

                <div className="article-tags mt-8 pt-4 border-t border-border">
                  <span className="font-semibold mr-2">Tags:</span>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Corporate Law
                  </a>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Intellectual Property
                  </a>
                  <a href="#" className="inline-block mr-2 px-3 py-1 bg-accent rounded-full text-sm">
                    Litigation
                  </a>
                </div>
              </div>
            </article>

            <div className="pagination flex justify-center gap-2 mt-8">
              <a href="#" className="inline-block px-4 py-2 bg-accent rounded active bg-accent-gold text-dark-text">
                1
              </a>
              <a href="#" className="inline-block px-4 py-2 bg-accent rounded">
                2
              </a>
              <a href="#" className="inline-block px-4 py-2 bg-accent rounded">
                3
              </a>
              <a href="#" className="inline-block px-4 py-2 bg-accent rounded">
                Next →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

