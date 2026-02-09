'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const products = [
  {
    id: 1,
    name: 'Cozy Wool Sweater',
    category: 'Clothing',
    emoji: '👚',
    description: 'Hand-knitted using premium merino wool for ultimate comfort',
  },
  {
    id: 2,
    name: 'Winter Beanie',
    category: 'Clothing',
    emoji: '🧢',
    description: 'Warm and stylish beanie perfect for cold seasons',
  },
  {
    id: 3,
    name: 'Chunky Infinity Scarf',
    category: 'Clothing',
    emoji: '🧣',
    description: 'Statement piece crafted with thick, luxurious yarn',
  },
  {
    id: 4,
    name: 'Weighted Blanket',
    category: 'Home Decor',
    emoji: '🛏️',
    description: 'Cozy blanket for your favorite couch or bed',
  },
  {
    id: 5,
    name: 'Decorative Cushion',
    category: 'Home Decor',
    emoji: '🪡',
    description: 'Beautiful patterned cushion to brighten any room',
  },
  {
    id: 6,
    name: 'Wall Hanging Tapestry',
    category: 'Home Decor',
    emoji: '🎨',
    description: 'Intricate crochet art piece for your walls',
  },
  {
    id: 7,
    name: 'Crossbody Bag',
    category: 'Accessories',
    emoji: '👜',
    description: 'Stylish handmade bag perfect for everyday use',
  },
  {
    id: 8,
    name: 'Statement Necklace',
    category: 'Accessories',
    emoji: '✨',
    description: 'Unique fiber jewelry that adds character to any outfit',
  },
  {
    id: 9,
    name: 'Slouchy Beret',
    category: 'Accessories',
    emoji: '🎩',
    description: 'French-inspired crochet beret with a modern twist',
  },
]

export default function Gallery() {
  const categories = ['All', 'Clothing', 'Home Decor', 'Accessories']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">Full Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Explore our complete collection of handmade crochet pieces
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground border border-border hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-muted rounded-xl h-64 mb-6 flex items-center justify-center border border-border hover:border-primary transition-all overflow-hidden">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{product.emoji}</div>
                </div>
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Link href="/#contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                    Inquire about this item →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Want Something Custom?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't see exactly what you're looking for? We create custom pieces tailored to your preferences.
          </p>
          <Link href="/#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Request Custom Order
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
