'use client';

import Link from 'next/link';

export function HotelFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Discover',
      links: [
        { label: 'Hotels', href: '#' },
        { label: 'Resorts', href: '#' },
        { label: 'Experiences', href: '#' },
        { label: 'Luxury Stays', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Booking Help', href: '#' },
        { label: 'Cancellations', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Trust & Safety', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-primary border-t border-border font-English font-bold text-2xl">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-serif font-bold text-primary mb-4"
            >
              <div className="h-8 w-8 rounded-lg bg-secondary text-primary-foreground flex items-center justify-center text-2xl font-bold hover:text-hovercolor">
                H
              </div>
              <span className='text-secondary hover:text-hovercolor transition-colors'>LuxeStay</span>
            </Link>
            <p className="text-muted-foreground max-w-sm hover:text-hovercolor transition-colors">
              Discover and book exceptional hotels worldwide. Your perfect escape awaits with LuxeStay.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.5 4-5 5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>  
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col justify-start hover:text-hovercolor transition-colors">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4 ">
              Get exclusive offers and travel inspiration delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-2xl font-serif font-bold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-2xl text-muted-foreground hover:text-hovercolor transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-2xl">
          <p className="text-xl text-muted-foreground hover:text-hovercolor transition-colors">
            © {currentYear} LuxeStay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xl text-muted-foreground hover:text-hovercolor transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xl text-muted-foreground hover:text-hovercolor transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xl text-muted-foreground hover:text-hovercolor transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
