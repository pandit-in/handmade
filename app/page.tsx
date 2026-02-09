"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Handcrafted with Love
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover unique, artisan-made crochet pieces. Each creation is
                crafted with passion using premium yarns and wool.
              </p>
              <div className="flex gap-4">
                <Link href="/#gallery">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
                    Explore Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    className="px-6 py-3 bg-transparent"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Handmade by Roshani Logo"
                width={400}
                height={400}
                className="rounded-2xl border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center">
            About Roshani
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to Handmade by Roshani, where passion meets craftsmanship.
              Each piece is thoughtfully designed and meticulously handmade to
              bring warmth and beauty into your life.
            </p>
            <p>
              With expertise in selecting premium yarns and innovative crochet
              techniques, I create clothing, accessories, and home decor that
              blend comfort with artistry. Every stitch tells a story of
              dedication and love.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground">Handmade</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Premium
                </div>
                <p className="text-foreground">Quality Materials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Custom
                </div>
                <p className="text-foreground">Orders Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-16 text-center">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Clothing */}
            <div className="group">
              <div className="bg-muted rounded-xl h-80 mb-6 flex items-center justify-center border border-border hover:border-primary transition-colors overflow-hidden">
                <div className="text-6xl">👚</div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Clothing
              </h3>
              <p className="text-muted-foreground mb-4">
                Cozy sweaters, hats, scarves, and more crafted for comfort and
                style.
              </p>
              <Link
                href="/#contact"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Home Decor */}
            <div className="group">
              <div className="bg-muted rounded-xl h-80 mb-6 flex items-center justify-center border border-border hover:border-primary transition-colors overflow-hidden">
                <div className="text-6xl">🏠</div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Home Decor
              </h3>
              <p className="text-muted-foreground mb-4">
                Beautiful blankets, cushions, and wall hangings to transform
                your space.
              </p>
              <Link
                href="/#contact"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Accessories */}
            <div className="group">
              <div className="bg-muted rounded-xl h-80 mb-6 flex items-center justify-center border border-border hover:border-primary transition-colors overflow-hidden">
                <div className="text-6xl">👜</div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Accessories
              </h3>
              <p className="text-muted-foreground mb-4">
                Unique bags, belts, and jewelry to complete any outfit.
              </p>
              <Link
                href="/#contact"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/gallery">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                View Full Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Interested in a custom order or want to learn more about our
            creations? We'd love to hear from you!
          </p>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="text-lg font-medium text-foreground">
                contact@handmadebyroshani.com
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Instagram</p>
              <p className="text-lg font-medium text-foreground">
                @handmadebyroshani
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Response Time
              </p>
              <p className="text-lg font-medium text-foreground">24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
