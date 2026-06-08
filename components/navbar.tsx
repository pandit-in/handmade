'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Collection Gallery' },
    { href: '/#about', label: 'Our Story' },
    { href: '/#reviews', label: 'Testimonials' },
    { href: '/#contact', label: 'Custom Inquiry' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Handmade by Roshani"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-wide text-foreground leading-none group-hover:text-primary transition-colors duration-300">
                Handmade
              </span>
              <span className="text-xs font-sans font-medium text-muted-foreground tracking-widest leading-none mt-1">
                BY ROSHANI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground font-sans font-medium text-sm tracking-wide transition-colors duration-200 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm rounded-full px-5 font-sans font-medium gap-2">
                <Send className="h-3.5 w-3.5" />
                Custom Order
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="/gallery" className="text-foreground/80 hover:text-primary transition-colors p-2">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background border-l border-border p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-border/60 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden border border-primary/20">
                        <Image
                          src="/logo.png"
                          alt="Handmade by Roshani"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-md font-serif font-bold text-foreground leading-none">
                          Handmade
                        </span>
                        <span className="text-[10px] font-sans font-medium text-muted-foreground tracking-wider leading-none mt-1">
                          BY ROSHANI
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground/80 hover:text-primary text-lg font-medium tracking-wide transition-colors py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                  <Link href="/#contact" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/95 rounded-full py-5 gap-2 font-medium">
                      <Send className="h-4 w-4" />
                      Get custom quote
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-muted-foreground">
                    Based in India • Shipping Worldwide
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
