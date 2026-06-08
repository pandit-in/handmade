'use client'

import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppWidgetProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppWidget({
  phoneNumber = "+918999591155", // Example Indian phone number placeholder
  message = "Hi Roshani! I saw your website and I'd love to inquire about custom crochet items."
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show the friendly welcome tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Welcome Chat Bubble */}
      {showTooltip && (
        <div className="relative max-w-xs bg-card border border-border shadow-xl rounded-2xl p-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close message"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex gap-3 items-start pr-4">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2 animate-ping" />
            <div>
              <p className="text-xs font-semibold text-primary mb-1">Roshani is Online</p>
              <p className="text-sm text-foreground leading-relaxed">
                Hey! looking for something custom? Or have questions about our bouquets? Let's chat!
              </p>
            </div>
          </div>
          {/* Bubble Tail */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppRedirect}
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-white stroke-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
        {/* Pulse effect */}
        <span className="absolute -inset-0.5 rounded-full border border-[#25D366] animate-ping opacity-25 group-hover:opacity-0 transition-opacity" />
      </button>
    </div>
  )
}
