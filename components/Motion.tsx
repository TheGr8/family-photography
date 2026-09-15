'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMotion } from '@/lib/motion';

/** Re-runs the page reveal sequence on every route change. */
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => initMotion(), [pathname]);
  return null;
}
