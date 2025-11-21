'use client';

import { useState } from 'react';
import Link from 'next/link';

export function HotelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Hotels', href: '#' },
    { label: 'Experiences', href: '#' },
    { label: 'Offers', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary font-English font-bold text-2xl">
      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-serif font-bold text-primary"
          >
            <div className="h-8 w-8 rounded-lg bg-secondary text-primary-foreground flex items-center justify-center text-sm font-bold">
              H
            </div>
            <span className="hidden sm:inline text-secondary hover:text-hovercolor transition-colors">LuxeStay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-2xl font-medium text-foreground transition-colors hover:text-hovercolor"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              aria-label="Search hotels"
              className="hidden sm:inline-flex p-2 text-foreground hover:text-hovercolor transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign In / Book Button */}
            <Link
              href="#"
              className="hidden sm:inline-flex px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90  hover:text-hovercolor transition-colors  "
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-hovercolor transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
                Book
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Search Bar Section */}
      <div className="border-t border-border bg-secondary py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {/* Destination */}
            <div className="flex items-center gap-3 bg-primary rounded-lg px-4 py-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow hover:text-hovercolor text-secondary text-xl">
              <svg className="w-5 h-5 text-muted-foreground " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex-1">
                <p className="text-xl font-medium text-muted-foreground">Where to?</p>
                <p className="text-xl font-medium text-foreground hover:text-hovercolor transition-colors">Any destination</p>
              </div>
            </div>

            {/* Check In */}
            <div className="flex items-center gap-3 bg-primary rounded-lg px-4 py-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow hover:text-hovercolor text-secondary text-xl">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="flex-1">
                <p className="text-xl font-medium text-muted-foreground">Check In</p>
                <p className="text-xl font-medium text-foreground">Add dates</p>
              </div>
            </div>

            {/* Check Out */}
            <div className="hidden sm:flex items-center gap-3 bg-primary rounded-lg px-4 py-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow hover:text-hovercolor text-secondary text-xl">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="flex-1">
                <p className="text-xl font-medium text-muted-foreground">Check Out</p>
                <p className="text-xl font-medium text-foreground">Add dates</p>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 bg-primary rounded-lg px-4 py-3 shadow-sm lg:col-span-1">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex-1">
                <p className="text-xl font-medium text-muted-foreground">Guests</p>
                <p className="text-xl font-medium text-foreground">2 guests</p>
              </div>
              <button className="ml-2 px-4 py-1 bg-accent text-accent-foreground rounded font-medium text-sm hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
