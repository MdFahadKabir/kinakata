export interface FadeInOptions {
  duration?: number;
  delay?: number;
  fromOpacity?: number;
  fromY?: number;
}

export interface CountUpOptions {
  duration?: number;
  decimals?: number;
  suffix?: string;
  easing?: (t: number) => number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function fadeInElement(
  element: HTMLElement,
  options: FadeInOptions = {},
): () => void {
  const {
    duration = 600,
    delay = 0,
    fromOpacity = 0,
    fromY = 16,
  } = options;

  const startOpacity = parseFloat(getComputedStyle(element).opacity) || 1;
  const startTransform = getComputedStyle(element).transform;
  let rafId = 0;
  let startTime: number | null = null;

  element.style.opacity = String(fromOpacity);
  element.style.transform = `translateY(${fromY}px)`;

  const animate = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime - delay;

    if (elapsed < 0) {
      rafId = requestAnimationFrame(animate);
      return;
    }

    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    element.style.opacity = String(
      fromOpacity + (startOpacity - fromOpacity) * eased,
    );
    element.style.transform = `translateY(${fromY * (1 - eased)}px)`;

    if (progress < 1) {
      rafId = requestAnimationFrame(animate);
    } else {
      element.style.opacity = '';
      element.style.transform = startTransform === 'none' ? '' : startTransform;
    }
  };

  rafId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(rafId);
}

export function countUp(
  element: HTMLElement,
  target: number,
  options: CountUpOptions = {},
): () => void {
  const {
    duration = 1200,
    decimals = 0,
    suffix = '',
    easing = easeOutCubic,
  } = options;
  let rafId = 0;
  let startTime: number | null = null;

  const animate = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = target * easing(progress);
    element.textContent = `${value.toFixed(decimals)}${suffix}`;

    if (progress < 1) {
      rafId = requestAnimationFrame(animate);
    } else {
      element.textContent = `${target.toFixed(decimals)}${suffix}`;
    }
  };

  rafId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(rafId);
}

export function observeAndFadeIn(
  selector: string,
  options?: FadeInOptions,
): () => void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  const cleanups: Array<() => void> = [];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        cleanups.push(fadeInElement(el, options));
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
    cleanups.forEach((cleanup) => cleanup());
  };
}
