"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Gift,
  Check,
  Award,
  ShieldCheck,
  Truck,
  Star,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { bestSellers } from "@/lib/products";

const categories = [
  {
    name: "Crochet Keychains",
    count: "18 items",
    emoji: "🔑",
    image: "/assets/keychains/cr4.jpeg",
    color: "bg-[#E29C91]/15 border-[#E29C91]/30",
    textColor: "text-[#E29C91]",
  },
  {
    name: "Flowers",
    count: "6 items",
    emoji: "💐",
    image: "/assets/crocket bouquet sunflower.png",
    color: "bg-[#8EBAA7]/15 border-[#8EBAA7]/30",
    textColor: "text-[#8EBAA7]",
  },
  {
    name: "Hair accessories",
    count: "20 items",
    emoji: "🎀",
    image: "/assets/hair/cr1.jpeg",
    color: "bg-[#9C94C2]/15 border-[#9C94C2]/30",
    textColor: "text-[#9C94C2]",
  },
  {
    name: "Giftings",
    count: "1 item",
    emoji: "🎁",
    image: "/assets/gifting/cr29.jpeg",
    color: "bg-amber-100/30 border-amber-200/50",
    textColor: "text-amber-700",
  },
  {
    name: "Room Decors",
    count: "2 items",
    emoji: "🏠",
    image: "/assets/home/cr40.jpeg",
    color: "bg-[#8EBAA7]/15 border-[#8EBAA7]/30",
    textColor: "text-[#8EBAA7]",
  },
  {
    name: "Pouches",
    count: "1 item",
    emoji: "👛",
    image: "/assets/pouches/cr42.jpeg",
    color: "bg-[#E29C91]/15 border-[#E29C91]/30",
    textColor: "text-[#E29C91]",
  },
]

const testimonials = [
  {
    quote:
      "I ordered the eternal sunflower bouquet for my mother's birthday. The detail in each stitch is amazing. She was in tears! Truly a gift that will be cherished forever.",
    name: "Anjali Mehta",
    location: "Mumbai",
    rating: 5,
    avatar: "👩‍🦰",
  },
  {
    quote:
      "Roshani made a custom makeup pouch for me in sage green. The lining inside is clean, and the crochet work is so tight and durable. I get compliments everywhere I go!",
    name: "Kritika Sen",
    location: "Bangalore",
    rating: 5,
    avatar: "👩",
  },
  {
    quote:
      "Hello, I received my parcel. Bahot acha banaya he (You have made it so beautifully)! The packaging was great and the crochet work is absolutely gorgeous.",
    name: "@floral_beee_",
    location: "Gandhidham, Kutch",
    rating: 5,
    avatar: "🐝",
  },
];

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background selection:bg-secondary/35 selection:text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-xs font-semibold text-foreground tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-[#E29C91] fill-current animate-pulse" />
              <span>EST. 2026 • 100% Handcrafted Love</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.15] tracking-tight">
              Flowers That <br />
              <span className="text-[#E29C91] font-semibold relative inline-block">
                Last Forever.
                {/* Handdrawn circle vector replacement below the word */}
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent/20 rounded-full" />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Welcome to the cozy workshop of{" "}
              <span className="font-medium text-foreground">Roshani</span>.
              Discover premium, custom-designed crochet bouquets, charming
              keychains, and aesthetic room decors knitted stitch-by-stitch to
              bring joy into your home.
            </p>

            {/* Micro Benefit Badges */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-center gap-2.5">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3px]" />
                </div>
                <span className="text-sm font-medium text-foreground/80">
                  Premium Quality Yarns
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3px]" />
                </div>
                <span className="text-sm font-medium text-foreground/80">
                  100% Customizable
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3px]" />
                </div>
                <span className="text-sm font-medium text-foreground/80">
                  Zero Wilting Guaranteed
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3px]" />
                </div>
                <span className="text-sm font-medium text-foreground/80">
                  Thoughtful Gift Wrap
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg rounded-full px-8 py-6 font-medium text-base gap-2 group transition-all duration-300"
                >
                  Explore Collection
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border bg-white/50 backdrop-blur-sm hover:bg-white text-foreground hover:text-primary rounded-full px-8 py-6 font-medium text-base transition-colors duration-300"
                >
                  Request Custom Order
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="md:col-span-5 relative flex items-center justify-center animate-in fade-in slide-in-from-right-6 duration-700 delay-100">
            {/* Background design accents */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#8EBAA7]/10 to-[#9C94C2]/10 rounded-[2.5rem] blur-xl -z-10" />
            <div className="absolute top-4 -left-4 w-12 h-12 bg-yellow-200/40 rounded-full blur-lg" />

            <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 group">
              <Image
                src="/assets/bouquet.png"
                alt="Handcrafted Crochet Flower Bouquet"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                <Heart className="h-4 w-4 fill-current text-[#E29C91]" />
                <span className="uppercase tracking-widest text-xs font-bold">
                  Curated Favorites
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our Bestsellers
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group"
            >
              View full collection
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-background border border-border/60 hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Illustration Container */}
                <div
                  className={`relative h-60 ${product.color || "bg-secondary/10"} flex items-center justify-center overflow-hidden border-b border-border/40`}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-7xl group-hover:scale-125 transition-transform duration-500 select-none">
                      {product.emoji}
                    </span>
                  )}

                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Tags */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm border border-border/40 rounded-full text-[10px] font-bold text-foreground shadow-sm uppercase tracking-wider z-20">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-primary/70 tracking-wider uppercase">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground mt-1 leading-snug group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      <span className="text-xs text-muted-foreground line-through ml-2">
                        {product.originalPrice}
                      </span>
                    </div>

                    <Link
                      href={`/#contact?item=${encodeURIComponent(product.name)}`}
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:bg-primary/10 hover:text-primary rounded-full px-3.5 py-1 text-xs font-semibold gap-1.5"
                      >
                        Inquire
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 bg-[#8EBAA7]/10 px-4 sm:px-6 lg:px-8 border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
              <Heart className="h-5 w-5 text-[#E29C91] fill-current" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Love Crafted
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Stitched by hand with maximum precision & care.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Premium Materials
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Soft milk cotton & organic wool yarn blends.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Custom Orders
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Tailored perfectly to your theme or size preference.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Safe Delivery
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Secured packaging so bouquets arrive in perfect shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Workshop Collections</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            Filter our premium collection by style. Each piece is designed
            specifically for gifts, key rings, hair clips, or home spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/gallery?cat=${encodeURIComponent(cat.name)}`}
              className="group relative overflow-hidden aspect-[4/5] w-full rounded-[2rem] border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Background Image/Emoji */}
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div
                  className={`absolute inset-0 ${cat.color} flex items-center justify-center text-5xl`}
                >
                  {cat.emoji}
                </div>
              )}

              {/* Bottom Gradient Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col items-center text-center">
                {/* Badge Category Name */}
                <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-sm text-foreground text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md leading-none border border-white/20">
                  {cat.name}
                </span>

                {/* Count Subtext */}
                <span className="text-[10px] text-white/90 font-semibold mt-2 tracking-wider drop-shadow-sm">
                  {cat.count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Large Tabletop Banner Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          {/* Tabletop Image */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white/60">
              <Image
                src="/blooms_collection.png"
                alt="Tabletop Handcrafted Blooms Collection"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Banner Text Detail */}
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              A Tapestry of Thread
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              The Handcrafted Blooms Collection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every stitch is a promise of joy. We curate high-quality potted
              plants, lifelike cotton stems, and vibrant rose arrangements.
              Unlike real plants, they require zero watering, zero soil, and
              zero sun, yet they glow with the same organic cozy vibe.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Check className="h-4.5 w-4.5 text-[#E29C91] shrink-0" />
                <span>
                  Perfect for Study Desks, Living Room shelves, or bedside
                  tables
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Check className="h-4.5 w-4.5 text-[#E29C91] shrink-0" />
                <span>Custom color pots available upon message request</span>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/gallery?cat=Flowers">
                <Button className="bg-[#E29C91] text-white hover:bg-[#E29C91]/90 rounded-full px-6 font-sans">
                  Shop the Bouquet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section
        id="reviews"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">
            Love Letters
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Customer Stories
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Read what other crochet lovers say about Roshani's detailed
            craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 hover:border-secondary/40 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#E29C91] mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm italic text-foreground/85 leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-4 border-t border-border/40">
                <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center text-lg">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground leading-none">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {test.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eternal Crochet Blooms Secondary Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-[#9C94C2]/15 via-background to-[#E29C91]/15 border-y border-border/40">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Eternal Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Fine Yarn Craft. No Wilting.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Gift your loved ones a flower that represents your undying bond.
            Custom bouquets tailored to weddings, anniversaries, graduation, or
            a simple cozy reminder.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/gallery">
              <Button className="bg-[#9C94C2] text-white hover:bg-[#9C94C2]/90 rounded-full px-8 py-5">
                Shop Now
              </Button>
            </Link>
            <Link href="https://wa.me/918999591155" target="_blank">
              <Button
                variant="outline"
                className="border-border bg-white rounded-full px-8 py-5 gap-2 text-foreground hover:text-primary"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Chat
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Roshani Section */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              The Artisan
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Meet Roshani
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Roshani, the designer and maker behind every single
                item you see in this shop. What started as a childhood curiosity
                of twirling threads turned into a deep passion for the
                therapeutic, artistic world of crochet knitting.
              </p>
              <p>
                For me, crochet is a language. Each knot is structured,
                intentional, and strong. I spend hours choosing premium cotton
                blends, choosing color combos, and testing layouts to ensure the
                best durability. Whether it's a tiny peach pouch or a large
                sunflower box, you receive a part of my creative soul.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <h3 className="font-serif font-bold text-foreground text-lg">
                What We Stand For
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <span className="text-2xl font-bold text-primary">100%</span>
                  <p className="text-xs font-semibold text-foreground mt-1">
                    Premium Yarns Only
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Zero fuzzy splitting wool blends used.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <span className="text-2xl font-bold text-primary">
                    Custom
                  </span>
                  <p className="text-xs font-semibold text-foreground mt-1">
                    Design Adaptation
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Choose your favorite colors & sizes.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <span className="text-2xl font-bold text-primary">Fast</span>
                  <p className="text-xs font-semibold text-foreground mt-1">
                    Inquiry Response
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Replies on WhatsApp & mail in 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 group">
              <Image
                src="/roshani_profile.jpg"
                alt="Roshani - Artisan Crochet Maker"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif font-bold text-lg leading-none">
                  Roshani
                </p>
                <p className="text-xs font-light text-white/80 mt-1">
                  Founder & Lead Knitter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/15 border-t border-border/40"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Request a Custom Creation
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Want a specific color bouquet? Or custom alphabet keychains? Fill
              out the form below and Roshani will get back to you!
            </p>
          </div>

          <div className="bg-card border border-border/60 shadow-xl rounded-3xl p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer & Floating Widget */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
