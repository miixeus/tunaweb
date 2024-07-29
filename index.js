import { SpeedInsights } from '@vercel/speed-insights/next';

// Utilize o Speed Insights para monitorar o desempenho da sua página
SpeedInsights({
  token: 'YOUR_SPEED_INSIGHTS_TOKEN', // Substitua pelo seu token do Speed Insights
  performance: true,
  accessibility: true,
  bestPractices: true,
  seo: true,
  pwa: true,
});
