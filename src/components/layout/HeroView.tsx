"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Typography } from "@/components/common/Typography";
import { AnimatedStats } from "@/components/common/AnimatedStats";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function HeroView() {
  const t = useLanguageStore((s) => s.t);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-8 text-center">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="w-full"
      >
        <Typography
          variant="h1"
          className="bg-linear-to-r from-primary to-blue-900 bg-clip-text text-transparent"
        >
          {t.hero_title}
        </Typography>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Typography
          variant="h3"
          className="max-w-3xl font-normal text-foreground/80"
        >
          {t.hero_subtitle}
        </Typography>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AnimatedStats />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex w-full flex-col items-center gap-4 pt-4"
      >
        <Typography variant="span" className="text-foreground/60">
          {t.hero_cta}
        </Typography>
        <SubscribeForm />
      </motion.div>
    </div>
  );
}
