import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section(props: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={props.id} className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          {props.title}
        </motion.h2>
        <div className="mt-6">{props.children}</div>
      </div>
    </section>
  );
}
