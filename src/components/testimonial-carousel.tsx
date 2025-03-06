"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "JEE Advanced, AIR 245",
    content:
      "STUDYtable's personalized approach helped me understand complex Physics concepts that I was struggling with. The AI tutor identified my weak areas and provided targeted practice.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "NEET, AIR 189",
    content:
      "The unlimited practice sessions were a game-changer for my NEET preparation. I could practice at my own pace and get instant feedback on my mistakes.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "CBSE Class 12, 98.6%",
    content:
      "STUDYtable made my board exam preparation stress-free. The AI tutor was available 24/7 to clear my doubts, and the practice questions were very similar to the actual exam.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            <p className="text-gray-700 text-lg mb-6">
              &quot;{testimonials[current].content}&quot;
            </p>

            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/Profile Icon.png"
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                  height={100}
                  width={100}
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold">{testimonials[current].name}</h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            } transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}
