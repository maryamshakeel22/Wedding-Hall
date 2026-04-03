"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    title: "Main Hall",
    category: "venue",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    title: "Wedding Setup",
    category: "wedding",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvqOMlonwyq7xggG0conI6Su4QETn_ygg3A&s",
    title: "Bridal Stage",
    category: "decor",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
    title: "Reception Area",
    category: "venue",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4cXVhv7kgtVfpE170U9nqQ-NqBR8Yo5zXw&s",
    title: "Mehndi Setup",
    category: "mehndi",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb71qRDlBbpRvZaHETrNBYXxj9f8p5W6XIg&s",
    title: "Evening Lighting",
    category: "decor",
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/017/659/783/small/served-table-in-restaurant-with-dishes-and-glasses-photo.jpg",
    title: "Dining Setup",
    category: "dining",
  },
  {
    src: "https://shamojee.pk/cdn/shop/articles/Hero-18_1024x1024.jpg?v=1691361586",
    title: "Outdoor Garden",
    category: "venue",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=600&fit=crop",
    title: "Birthday Decor",
    category: "birthday",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "venue", label: "Venue" },
  { id: "wedding", label: "Wedding" },
  { id: "mehndi", label: "Mehndi" },
  { id: "decor", label: "Decor" },
  { id: "dining", label: "Dining" },
  { id: "birthday", label: "Birthday" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-5 py-2.5 rounded-full badge-soft mb-6 shadow-md">
            Our Gallery
          </span>
          <h2 className="text-heading mb-6 text-balance">
            <span className="gradient-text">Beautiful Moments</span>{" "}
            <span className="text-[var(--text-primary)]">Captured Here</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-balance">
            Explore our stunning venue through these carefully captured moments
            from past events and celebrations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 sm:px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white shadow-lg shadow-[var(--gold)]/40 scale-105"
                  : "bg-[var(--hover-bg)] dark:bg-white/5 text-[var(--text-secondary)] dark:text-gray-300 hover:bg-[var(--gold-pale)] dark:hover:bg-white/10 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg shadow-gold/5 cursor-pointer card-elevated hover:shadow-2xl hover:shadow-gold/15"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-white/90 text-sm font-medium">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Gold Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/60 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-[var(--hover-bg)] dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
              <ZoomIn className="w-8 h-8 text-[var(--text-muted)]" />
            </div>
            <p className="text-[var(--text-tertiary)] dark:text-gray-400 text-lg">
              No images found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
              disabled={selectedImage === 0}
              className="absolute left-4 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
              disabled={selectedImage === filteredImages.length - 1}
              className="absolute right-4 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center px-4">
              <h3 className="text-lg sm:text-2xl font-semibold">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
