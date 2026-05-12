"use client";

import { useLanguage } from '../../context/LanguageContext';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';

export function HeroView() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-in fade-in zoom-in duration-700">
      <Typography variant="h1" className="text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
        {t.hero_title}
      </Typography>
      <Typography variant="h3" className="text-foreground/80 max-w-3xl font-normal">
        {t.hero_subtitle}
      </Typography>
      <div className="pt-8">
        <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/50 transition-all">
          {t.hero_cta}
        </Button>
      </div>
    </div>
  );
}
