'use client'

import { useEffect, useRef, useCallback, useState, createContext, useContext, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* ─── Lightbox Context ─── */

interface LightboxState {
  src: string
  alt: string
  open: boolean
}

interface LightboxContextValue {
  openLightbox: (src: string, alt: string) => void
  closeLightbox: () => void
}

const LightboxContext = createContext<LightboxContextValue>({
  openLightbox: () => {},
  closeLightbox: () => {},
})

export function useLightbox() {
  return useContext(LightboxContext)
}

/* ─── Provider ─── */

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>({ src: '', alt: '', open: false })

  const openLightbox = useCallback((src: string, alt: string) => {
    setState({ src, alt, open: true })
  }, [])

  const closeLightbox = useCallback(() => {
    setState(prev => ({ ...prev, open: false }))
  }, [])

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <ImageLightbox src={state.src} alt={state.alt} open={state.open} onClose={closeLightbox} />
    </LightboxContext.Provider>
  )
}

/* ─── Clickable Image (for MDX override) ─── */

export function ClickableImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { openLightbox } = useLightbox()
  const src = props.src || ''
  const alt = props.alt || ''

  return (
    <img
      {...props}
      onClick={() => openLightbox(String(src), alt)}
      style={{ cursor: 'pointer', ...props.style }}
    />
  )
}

/* ─── Lightbox Component ─── */

interface ImageLightboxProps {
  src: string
  alt: string
  open: boolean
  onClose: () => void
}

function ImageLightbox({ src, alt, open, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const posStart = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset on close
  useEffect(() => {
    if (!open) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [open])

  // Esc to close
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Wheel zoom (non-passive to allow preventDefault)
  useEffect(() => {
    const el = containerRef.current
    if (!el || !open) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.15 : 0.15
      setScale(prev => Math.min(5, Math.max(0.5, prev + delta)))
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [open])

  // Double-click toggle 1x ↔ 2x
  const handleDoubleClick = useCallback(() => {
    setScale(prev => {
      const next = prev >= 1.8 ? 1 : 2
      if (next === 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }, [])

  // Drag to pan
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (scale <= 1) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    posStart.current = { ...position }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [scale, position])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setPosition({ x: posStart.current.x + dx, y: posStart.current.y + dy })
  }, [isDragging])

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Prevent right-click
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Zoom indicator */}
          {scale !== 1 && (
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              {Math.round(scale * 100)}%
            </div>
          )}

          {/* Image */}
          <motion.img
            src={src}
            alt={alt}
            draggable={false}
            onContextMenu={handleContextMenu}
            onDoubleClick={handleDoubleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[85vh] max-w-[90vw] select-none rounded-lg object-contain shadow-2xl"
            style={{
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            }}
            initial={{ scale: 0.9, opacity: 0, x: 0, y: 0 }}
            animate={{ scale, opacity: 1, x: position.x, y: position.y }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={isDragging ? { duration: 0 } : { type: 'tween', duration: 0.15 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
