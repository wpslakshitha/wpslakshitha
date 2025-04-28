import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    { name: "Client 1", logo: "/api/placeholder/120/60" },
    { name: "Client 2", logo: "/api/placeholder/120/60" },
    { name: "Client 3", logo: "/api/placeholder/120/60" },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container px-4 py-16">
        {/* Gold accent bar */}
        <div className="w-12 h-1 bg-amber-400 mb-8"></div>

        <h2 className="text-3xl font-bold mb-12">Clients</h2>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
