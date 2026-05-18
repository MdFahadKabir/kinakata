export type Theme = 'light' | 'dark';
export type Language = 'en' | 'bn';

export interface Translations {
  nav_home: string;
  nav_chart: string;
  nav_screeners: string;
  nav_heatmap: string;
  nav_table: string;
  nav_paid: string;
  theme_dark: string;
  theme_light: string;
  language: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  chart_title: string;
  chart_desc: string;
  screeners_title: string;
  screeners_desc: string;
  heatmap_title: string;
  heatmap_desc: string;
  table_title: string;
  table_desc: string;
  paid_title: string;
  paid_desc: string;
  form_email_label: string;
  form_email_placeholder: string;
  form_submit: string;
  form_success: string;
  form_error_required: string;
  form_error_email: string;
  stats_users: string;
  stats_markets: string;
}

export type TranslationKey = keyof Translations;

export interface SubscribeFormValues {
  email: string;
}
