'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ShoppingBag, ArrowRight, MessageSquare, X, Info, Palette, SlidersHorizontal, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

// Full list of aesthetic products matching requested categories
const products = [
  {
    id: 1,
    name: 'Eternal Sunflower Bouquet',
    category: 'Flowers',
    emoji: '🌻',
    price: '₹799',
    description: 'A gorgeous double-stemmed yellow sunflower arrangement with deep green leaves, beautifully wrapped in rustic craft paper and mesh. Never wilts.',
    customizable: 'Colors of wrapping paper and petals can be customized.'
  },
  {
    id: 2,
    name: 'Aesthetic Cotton & Rose Bouquet',
    category: 'Flowers',
    emoji: '🌹',
    price: '₹1,299',
    description: 'An elegant statement bouquet blending soft white fluffy cotton pods with deep red and blush pink crochet roses. Perfect for anniversaries.',
    customizable: 'Number of rosebuds and packaging color.'
  },
  {
    id: 3,
    name: 'Potted Crochet Lavender Plant',
    category: 'Flowers',
    emoji: '🪴',
    price: '₹399',
    description: 'A mini hand-potted lavender plant sitting in a tiny terracotta pot. Perfect addition to study tables, book shelves, or workstations.',
    customizable: 'Pot color (beige, white, grey).'
  },
  {
    id: 4,
    name: 'Cute Smiling Avocado Keychain',
    category: 'Crochet Keychains',
    emoji: '🥑',
    price: '₹199',
    description: 'Adorable, stuffed mini avocado keychain with a friendly embroidered smile and a little brown seed heart. Includes a sturdy silver keyring.',
    customizable: 'Available in light green or deep moss green.'
  },
  {
    id: 5,
    name: 'Handcrafted Daisy Keychain',
    category: 'Crochet Keychains',
    emoji: '🌼',
    price: '₹149',
    description: 'A simple, classic daisy flower keychain with a yellow center and white petals. Brings a touch of sunny retro charm wherever you clip it.',
    customizable: 'Petal color (white, pink, light blue).'
  },
  {
    id: 6,
    name: 'Chubby Penguin Plush Keychain',
    category: 'Crochet Keychains',
    emoji: '🐧',
    price: '₹249',
    description: 'Knitted using extra-soft plush chenille yarn. This super squishy round penguin keychain has safety eyes and tiny orange feet.',
    customizable: 'Yarn color (blue-grey, pink, classic navy).'
  },
  {
    id: 7,
    name: 'Tulip Pastel Hair Clip Set',
    category: 'Hair accessories',
    emoji: '🎀',
    price: '₹249',
    description: 'Set of two matching hair clips: one featuring a pastel pink tulip and another with a yellow tulip, mounted on gold-plated snap barrettes.',
    customizable: 'Flower types (can mix daisies, tulips, or roses).'
  },
  {
    id: 8,
    name: 'Stretchable Daisy Chain Headband',
    category: 'Hair accessories',
    emoji: '👑',
    price: '₹299',
    description: 'A beautiful stretchable headband made of linked white daisies. Super soft, lightweight, and gentle on hair.',
    customizable: 'Circumference (toddler to adult size).'
  },
  {
    id: 9,
    name: 'Rosebud Elastic Scrunchie',
    category: 'Hair accessories',
    emoji: '💇‍♀️',
    price: '₹199',
    description: 'A strong elastic hair band detailed with a crown of tiny hand-crocheted pastel pink and cream rosebuds.',
    customizable: 'Rosebud colors.'
  },
  {
    id: 10,
    name: 'Lavender Fields Drawstring Bag',
    category: 'Pouches',
    emoji: '👛',
    price: '₹399',
    description: 'A textured knit drawstring pouch with a cream base and embroidered lavender stems. Perfect for jewelry, cosmetics, or gift wrapping.',
    customizable: 'Base color and drawstring ribbon style.'
  },
  {
    id: 11,
    name: 'Cozy Rose Makeup Pouch',
    category: 'Pouches',
    emoji: '👝',
    price: '₹599',
    description: 'A spacious zippered pouch crocheted in a premium popcorn stitch for a bubbly texture. Features a high-quality cotton inner lining.',
    customizable: 'Zipper color and interior fabric lining pattern.'
  },
  {
    id: 12,
    name: 'Cotton Water Bottle Sling Pouch',
    category: 'Pouches',
    emoji: '🥤',
    price: '₹349',
    description: 'A sturdy criss-cross mesh bottle holder with a comfortable shoulder strap. Stretches to fit standard reusable flasks or tumblers.',
    customizable: 'Strap length and color block bands.'
  },
  {
    id: 13,
    name: 'Aesthetic Sunflower Coaster Set',
    category: 'Room Decors',
    emoji: '🏠',
    price: '₹499',
    description: 'Set of four sunflower-shaped coasters. Thick and highly absorbent, safeguarding your tables while adding a bright bohemian aesthetic.',
    customizable: 'Sold in sets of 2, 4, or 6.'
  },
  {
    id: 14,
    name: 'Boho Feather Dreamcatcher',
    category: 'Room Decors',
    emoji: '🕸️',
    price: '₹799',
    description: 'A circular web frame featuring intricate lace crochet patterns at the center, adorned with hanging crochet feathers and wooden beads.',
    customizable: 'Feather colors (sage green, beige, dusty pink mix).'
  },
  {
    id: 15,
    name: 'Aesthetic Mug Rug (Set of 2)',
    category: 'Room Decors',
    emoji: '☕',
    price: '₹299',
    description: 'Two rectangle mini carpets featuring crochet checkerboard patterns and playful fringes. Perfect cozy base for hot coffee mugs.',
    customizable: 'Checker color combo.'
  },
  {
    id: 16,
    name: 'Custom Couple Initial Gift Box',
    category: 'Giftings',
    emoji: '🎁',
    price: '₹1,499',
    description: 'A beautifully packaged premium gifting hamper containing two custom letter keychains (initials of your choice), a mini red rose, and a lettercard.',
    customizable: 'Initials, lettercard message, and rose color.'
  },
  {
    id: 17,
    name: 'Custom Alphabet block letter',
    category: 'Giftings',
    emoji: '🅰️',
    price: '₹149',
    description: 'Choose your alphabet! We handcraft a blocky 3D initial letter in your favorite pastel color with keyrings attached.',
    customizable: 'Alphabet letter (A-Z) and color.'
  }
]

const categories = [
  'All',
  'Crochet Keychains',
  'Flowers',
  'Hair accessories',
  'Giftings',
  'Room Decors',
  'Pouches'
]

function GalleryContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('cat') || 'All'
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [customColor, setCustomColor] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Sync category with search params on load or change
  useEffect(() => {
    if (categories.includes(initialCategory)) {
      setSelectedCategory(initialCategory)
    }
  }, [initialCategory])

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleOpenQuickView = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setCustomColor('')
    setIsDialogOpen(true)
  }

  const handleWhatsAppInquiry = (product: typeof products[0]) => {
    const baseMessage = `Hi Roshani! I'm interested in ordering the "${product.name}" (${product.price}) from your gallery.`
    const customizationMessage = customColor ? ` I would love to customize it with: "${customColor}".` : ''
    const fullMessage = encodeURIComponent(baseMessage + customizationMessage)
    const phone = "918999591155" // Indian phone format
    window.open(`https://wa.me/${phone}?text=${fullMessage}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      
      {/* Search and Filter Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between bg-card border border-border/60 p-6 rounded-3xl mb-12 shadow-sm">
        
        {/* Category Buttons Scroll Box */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none shrink-0 max-w-full md:max-w-[70%]">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground mr-2 shrink-0 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shrink-0 duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-md scale-102'
                  : 'bg-background text-foreground/80 border border-border/60 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Text Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search items (e.g., sunflower, pouch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-2.5 rounded-full border border-border bg-background text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm font-bold"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid Display */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-border/50 hover:border-primary/30 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleOpenQuickView(product)}
            >
              {/* Product illustration container */}
              <div className="relative h-64 bg-secondary/10 hover:bg-secondary/15 flex items-center justify-center border-b border-border/40 overflow-hidden">
                <span className="text-7xl group-hover:scale-115 transition-transform duration-500 select-none">
                  {product.emoji}
                </span>
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm border border-border/40 rounded-full text-[10px] font-bold text-primary shadow-sm tracking-wider uppercase">
                  {product.category}
                </span>
              </div>

              {/* Product info details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{product.price}</span>
                  <Button size="sm" className="bg-primary/90 hover:bg-primary text-white rounded-full px-5 text-xs font-semibold gap-1.5 transition-all">
                    Inquire Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card border border-border/50 rounded-[2rem] max-w-md mx-auto">
          <p className="text-5xl">🧶</p>
          <h3 className="text-xl font-serif font-bold text-foreground mt-4">No Creations Found</h3>
          <p className="text-sm text-muted-foreground mt-2 px-6">
            We couldn't find any items matching "{searchQuery}" in category "{selectedCategory}". Try checking your spelling or selection.
          </p>
          <Button 
            variant="outline" 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-6 rounded-full"
          >
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Quick Inquiry / View Dialog */}
      {selectedProduct && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md sm:max-w-lg bg-background border border-border shadow-2xl rounded-3xl p-6 sm:p-8 overflow-hidden font-sans">
            <DialogHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl bg-secondary/15 p-2 rounded-2xl border border-secondary/20">
                  {selectedProduct.emoji}
                </span>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <DialogTitle className="text-2xl font-serif font-bold text-foreground mt-0.5">
                    {selectedProduct.name}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-5 mt-4">
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Description</h4>
                <p className="text-sm text-foreground/85 leading-relaxed mt-1 bg-card border border-border/55 p-3 rounded-2xl">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5 text-primary" />
                  Customization Details
                </h4>
                <p className="text-xs text-primary font-medium mt-1 pl-5 relative">
                  <span className="absolute left-1 top-1 w-1.5 h-1.5 bg-[#E29C91] rounded-full" />
                  {selectedProduct.customizable}
                </p>
              </div>

              <div className="pt-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1">
                  Specify customization requests (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wrap in yellow mesh, make petals light pink..."
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Estimated Price</p>
                  <p className="text-xl font-bold text-foreground leading-tight mt-0.5">{selectedProduct.price}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleWhatsAppInquiry(selectedProduct)}
                    className="bg-[#25D366] text-white hover:bg-[#20ba5a] rounded-full px-5 py-4 gap-1.5 font-medium shadow-sm transition-all"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-current" />
                    WhatsApp
                  </Button>
                  
                  <Link href={`/#contact?item=${encodeURIComponent(selectedProduct.name)}${customColor ? `&custom=${encodeURIComponent(customColor)}` : ''}`}>
                    <Button 
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="border-border bg-white rounded-full px-5 py-4 text-foreground hover:text-primary transition-all"
                    >
                      Use Form
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-muted/20 p-2.5 rounded-xl border border-border/40 mt-2">
                <Info className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Custom orders take 3-5 days to prepare and ship depending on order volume.</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

    </div>
  )
}

export default function Gallery() {
  return (
    <main className="min-h-screen bg-background selection:bg-secondary/35 selection:text-foreground">
      <Navbar />

      {/* Main Header Banner */}
      <section className="pt-32 pb-14 px-6 bg-gradient-to-b from-[#8EBAA7]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-xs font-semibold text-[#E29C91]">
            <Sparkles className="h-3 w-3 fill-current animate-pulse" />
            <span>Artisan Crochet Collection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
            Our Creations Gallery
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every petal, loop, and knot is crafted by hand in our quiet studio. Browse our catalog below and click any item to customize and order.
          </p>
        </div>
      </section>

      {/* Suspense Wrapper to prevent Static Build Errors in Next.js */}
      <Suspense fallback={<div className="text-center py-20 font-medium text-muted-foreground">Loading our crochet workshop...</div>}>
        <GalleryContent />
      </Suspense>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
