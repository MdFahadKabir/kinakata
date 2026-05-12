"use client";

import { useLanguage } from '../../context/LanguageContext';
import { Typography } from '../common/Typography';
import { Card, CardContent } from '../common/Card';

export function PageView({ titleKey, descKey }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <Typography variant="h1" className="text-foreground">
        {t[titleKey]}
      </Typography>
      <Typography variant="p" className="text-foreground/80 max-w-2xl">
        {t[descKey]}
      </Typography>
      <Card className="w-full max-w-4xl mt-8 p-12 bg-card/50">
        <CardContent className="flex items-center justify-center min-h-[300px]">
          <Typography variant="h3" className="text-foreground/40">
            {t[titleKey]} Component Placeholder
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
