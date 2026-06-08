'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MessageSquare, Heart, MapPin, Phone, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground font-sans pt-16 pb-8 px-6 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle organic background wave/circle for visual polish */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white/10 border border-white/20 p-0.5">
                <Image
                  src="/logo.png"
                  alt="Handmade by Roshani Logo"
                  fill
                  sizes="48px"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wide">Handmade</span>
                <span className="text-xs font-sans tracking-widest opacity-80">BY ROSHANI</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80 font-light pr-4">
              Beautifully handcrafted crochet creations made with premium yarns. Bringing warmth, elegance, and everlasting blooms into your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">Explore</h3>
            <ul className="space-y-2.5 text-sm font-light text-white/80">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all flex items-center gap-1.5 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition-all flex items-center gap-1.5 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Full Collection
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white hover:underline transition-all flex items-center gap-1.5 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white hover:underline transition-all flex items-center gap-1.5 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white hover:underline transition-all flex items-center gap-1.5 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Custom Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Quick Filter Link */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">Collections</h3>
            <ul className="space-y-2.5 text-sm font-light text-white/80">
              <li>
                <Link href="/gallery?cat=Flowers" className="hover:text-white hover:underline transition-all">
                  Crochet Flowers & Bouquets
                </Link>
              </li>
              <li>
                <Link href="/gallery?cat=Crochet Keychains" className="hover:text-white hover:underline transition-all">
                  Cute Crochet Keychains
                </Link>
              </li>
              <li>
                <Link href="/gallery?cat=Hair accessories" className="hover:text-white hover:underline transition-all">
                  Hair Accessories & Clips
                </Link>
              </li>
              <li>
                <Link href="/gallery?cat=Room Decors" className="hover:text-white hover:underline transition-all">
                  Aesthetic Room Decor
                </Link>
              </li>
              <li>
                <Link href="/gallery?cat=Pouches" className="hover:text-white hover:underline transition-all">
                  Cozy Bags & Pouches
                </Link>
              </li>
              <li>
                <Link href="/gallery?cat=Giftings" className="hover:text-white hover:underline transition-all">
                  Perfect Crochet Giftings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">Get in Touch</h3>
            <ul className="space-y-3.5 text-sm font-light text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-white/70" />
                <span>Maharashtra, India (Shipping Worldwide)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-white/70" />
                <a href="mailto:roshanisrathod2007@gmail.com" className="hover:text-white transition-colors">
                  roshanisrathod2007@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-white/70" />
                <a href="tel:+918999591155" className="hover:text-white transition-colors">
                  +91 89995 91155
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/70">
          <div>
            <p>
              Handmade by Roshani © {new Date().getFullYear()}. Crafted with{' '}
              <Heart className="inline-block h-3.5 w-3.5 text-red-400 fill-current animate-pulse mx-0.5" /> in India.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/handmadebyroshani"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://wa.me/918999591155"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageSquare className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:roshanisrathod2007@gmail.com"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
