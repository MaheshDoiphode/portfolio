import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset zoom and position when modal opens
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Handle zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const delta = -e.deltaY * 0.01;
    const newScale = Math.max(0.5, Math.min(4, scale + delta));
    setScale(newScale);
  };

  // Handle drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // Double click to reset zoom
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={() => onClose()} // Close when clicking anywhere on the backdrop
      ref={modalRef}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full z-10"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div 
        className="relative max-w-[90vw] max-h-[90vh]" 
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image container
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[90vh] max-w-[90vw] object-contain select-none"
          style={{
            scale,
            x: position.x,
            y: position.y,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={isDragging ? handleMouseMove : undefined}
          onMouseUp={handleMouseUp}
          onMouseLeave={isDragging ? handleMouseUp : undefined}
          onWheel={handleWheel}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
      </div>
      
      {/* Hide on mobile screens, show on medium (md) screens and up */}
      <div 
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        Scroll to zoom • Drag to pan • Double-click to reset
      </div>
    </motion.div>
  );
}