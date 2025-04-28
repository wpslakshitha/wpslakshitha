import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kasun Jayarathna",
      avatar: "/api/placeholder/80/80",
      content:
        "Jane was hired to create a corporate identity. We were very pleased with the work done.",
    },
    {
      name: "Naveen Buddhika",
      avatar: "/api/placeholder/80/80",
      content:
        "Jane was hired to create a corporate identity. We were very pleased with the work done.",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container px-4 py-16">
        {/* Gold accent bar */}
        <div className="w-12 h-1 bg-amber-400 mb-8"></div>

        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-md p-6"
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="rounded-full overflow-hidden w-14 h-14 bg-gray-800">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="#fbbf24"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mt-12 mb-4 mx-auto"></div>
      </div>
    </div>
  );
}
