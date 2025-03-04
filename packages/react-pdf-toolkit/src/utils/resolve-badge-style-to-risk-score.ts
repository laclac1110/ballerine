import { BadgeProps } from '@/components/atoms/Badge/types';

export const resolveBadgeStyleToRiskScore = (score: number | null = 0): BadgeProps['variant'] => {
  score = score === null ? 0 : score;

  if (score <= 39) return 'success';

  if (score <= 69) return 'moderate';

  if (score <= 84) return 'warning';

  return 'error';
};
