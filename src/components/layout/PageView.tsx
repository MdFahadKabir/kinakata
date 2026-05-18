'use client';

import { motion } from 'framer-motion';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { Typography } from '@/components/common/Typography';
import { Card, CardContent } from '@/components/common/Card';
import type { TranslationKey } from '@/types';
import type { ReactNode } from 'react';

interface PageViewProps {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  children?: ReactNode;
}

export function PageView({ titleKey, descKey, children }: PageViewProps) {
  const t = useLanguageStore((s) => s.t);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center"
    >
      <Typography variant="h1" className="text-foreground">
        {t[titleKey]}
      </Typography>
      <Typography variant="p" className="max-w-2xl text-foreground/80">
        {t[descKey]}
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mt-8 w-full max-w-4xl"
      >
        <Card className="w-full bg-card/50 p-6">
          <CardContent className="flex min-h-[300px] items-center justify-center p-6">
            {children ?? (
              <Typography variant="h3" className="text-foreground/40">
                {t[titleKey]} Component Placeholder
              </Typography>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
