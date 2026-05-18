'use client';

import { PageView } from '@/components/layout/PageView';
import { MarketChart } from '@/components/charts/MarketChart';

export function ChartPageView() {
  return (
    <PageView titleKey="chart_title" descKey="chart_desc">
      <MarketChart />
    </PageView>
  );
}
